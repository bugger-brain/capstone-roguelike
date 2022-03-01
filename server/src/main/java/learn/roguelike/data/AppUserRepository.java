package learn.roguelike.data;

import learn.roguelike.models.AppUser;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class AppUserRepository {

    private final JdbcTemplate jdbcTemplate;

    private final RowMapper<AppUser> mapper = (rs, i) -> {
        AppUser appUser = new AppUser();
        appUser.setId(rs.getInt("player_id"));
        appUser.setUsername(rs.getString("username"));
        appUser.setPassword(rs.getString("password_hash"));
        return appUser;
    };

    public AppUserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<AppUser> findAll() {
        return jdbcTemplate.query("select player_id, username, password_hash "
                + "from player;", mapper);
    }

    public List<String> findAllRoles() {
        return jdbcTemplate.query("select * from app_role;",
                (rs, i) -> rs.getString("name"));
    }

    @Transactional
    public AppUser findByUsername(String username) {
        AppUser user = jdbcTemplate.query(
                        "select * from player where username = ?;",
                        mapper,
                        username).stream()
                .findFirst()
                .orElse(null);

        if (user != null) {
            var authorities = getAuthorities(user.getId());
            user.setAuthorityNames(authorities);
        }

        return user;
    }

    @Transactional
    public AppUser findByAppUserId(int id) {
        AppUser user = jdbcTemplate.query(
                        "select * from player where player_id = ?;",
                        mapper,
                        id).stream()
                .findFirst()
                .orElse(null);

        if (user != null) {
            var authorities = getAuthorities(user.getId());
            user.setAuthorityNames(authorities);
        }

        return user;
    }

    public AppUser add(AppUser user) {

        final String sql = "insert into player (username, password_hash) values (?,?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(conn -> {
            PreparedStatement statement = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getPassword());
            return statement;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        user.setId(keyHolder.getKey().intValue());

        return user;
    }

    @Transactional
    public boolean update(AppUser user) {

        String sql = "update player set "
                + "username = ?, "
                + "where player_id = ?;";

        int rowsAffected = jdbcTemplate.update(sql,
                user.getUsername(),
                !user.isEnabled(),
                user.getId());

        if (rowsAffected > 0) {
            setAuthorities(user);
            return true;
        }

        return false;
    }

    public boolean changePassword(AppUser user) {

        String sql = "update player set "
                + "password_hash = ? "
                + "where player_id = ?;";

        int rowsAffected = jdbcTemplate.update(sql,
                user.getPassword(),
                user.getId());

        return rowsAffected > 0;
    }

    private void setAuthorities(AppUser user) {

        jdbcTemplate.update("delete from player_role where player_id = ?;", user.getId());

        for (var name : user.getAuthorityNames()) {
            String sql = "insert into player_role (player_id, app_role_id) "
                    + "values (?, (select player_id from app_role where name = ?));";
            jdbcTemplate.update(sql, user.getId(), name);
        }
    }

    private List<String> getAuthorities(int appUserId) {

        String sql = "select r.app_role_id, r.name "
                + "from player_role aur "
                + "inner join app_role r on aur.app_role_id = r.app_role_id "
                + "where aur.player_id = ?";

        return jdbcTemplate.query(sql,
                (rs, i) -> rs.getString("name"),
                appUserId);
    }
}
