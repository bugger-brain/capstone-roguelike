drop database if exists roguelike;
create database roguelike;
use roguelike;

create table player(
	player_id int primary key auto_increment,
    username varchar(255) not null unique,
    password_hash varchar(255) not null
);

create table game(
	game_id int primary key auto_increment,
    player_id int null,
	is_blueprint boolean,
    score int not null,
	constraint fk_game_player_id
		foreign key (player_id)
        references player(player_id)
);

create table map(
	map_id int primary key auto_increment,
    game_id int not null,
    x int not null,
    y int not null,
    constraint fk_map_game_id
		foreign key (game_id)
        references game(game_id)
);

create table tile(
	tile_id int primary key auto_increment,
    map_id int not null,
    `type` varchar(255) not null,
    x int not null,
    y int not null,
    constraint fk_tile_map_id
		foreign key (map_id)
        references map(map_id)
);

create table hero(
	hero_id int primary key auto_increment,
    game_id int not null,
    tile_id int null,
    hp int not null,
    lives int not null,
    air boolean null,
    water boolean null,
    earth boolean null,
    fire boolean null,
    `keys` int null,
    gold int not null,
    constraint fk_hero_tile_id
		foreign key (tile_id)
        references tile(tile_id),
	constraint fk_hero_game_id
		foreign key (game_id)
		references game(game_id)		
);

create table monster(
	monster_id int primary key auto_increment,
    tile_id int not null,
    hp int not null,
    constraint fk_monster_tile_id
		foreign key (tile_id)
        references tile(tile_id)
);


create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table player_role (
    player_id int not null,
    app_role_id int not null,
    constraint pk_player_role
        primary key (player_id, app_role_id),
    constraint fk_player_role_user_id
        foreign key (player_id)
         references player(player_id),
	constraint fk_player_role_role_id
         foreign key (app_role_id)
         references app_role(app_role_id)
);

insert into app_role (`name`) values
    ('USER'),
    ('ADMIN');
    
-- qwe123
insert into player values
	(1, 'pagoto', '$2a$10$3hxoSGXtjbIoMKcriQmSNuGTZr3X8qyir./R3uzw3jbWn6ZMofKC2'), 
    (2, 'steph', '$2a$10$3hxoSGXtjbIoMKcriQmSNuGTZr3X8qyir./R3uzw3jbWn6ZMofKC2'),
    (3, 'shred', '$2a$10$3hxoSGXtjbIoMKcriQmSNuGTZr3X8qyir./R3uzw3jbWn6ZMofKC2');
    
insert into player_role (player_id, app_role_id) values
	(1, 2),
    (2, 1),
    (3, 1);
    
insert into game values
	(1, 1, false, 0),
    (2, 2, false, 0),
    (3, 3, false, 0);
    
insert into map values
-- game 1 for pagoto
	(1, 1, 0, 0), 
    (2, 1, 1, 0),
    (3, 1, 0, 1),
    (4, 1, 1, 1),

-- game 2 for steph
	(5, 2, 0, 0), 
    (6, 2, 1, 0),
    (7, 2, 0, 1),
    (8, 2, 1, 1),

-- game 3 for shred
	(9, 3, 0, 0), 
    (10, 3, 1, 0),
    (11, 3, 0, 1),
    (12, 3, 1, 1);
insert into tile values
-- game 1 for pagoto
	(1, 1, 'grass', 0, 0),
    (2, 1, 'grass', 1, 0),
    (3, 1, 'grass', 0, 1),
    (4, 1, 'grass', 1, 1),
    
    (5, 2, 'grass', 0, 0),
    (6, 2, 'grass', 1, 0),
    (7, 2, 'grass', 0, 1),
    (8, 2, 'grass', 1, 1),
    
    (9, 3, 'grass', 0, 0),
    (10, 3, 'grass', 1, 0),
    (11, 3, 'grass', 0, 1),
    (12, 3, 'grass', 1, 1),
    
    (13, 4, 'grass', 0, 0),
    (14, 4, 'grass', 1, 0),
    (15, 4, 'grass', 0, 1),
    (16, 4, 'grass', 1, 1),
    
-- game 2 for steph
	(17, 5, 'grass', 0, 0),
    (18, 5, 'grass', 1, 0),
    (19, 5, 'grass', 0, 1),
    (20, 5, 'grass', 1, 1),
    
    (21, 6, 'grass', 0, 0),
    (22, 6, 'grass', 1, 0),
    (23, 6, 'grass', 0, 1),
    (24, 6, 'grass', 1, 1),
    
    (25, 7, 'grass', 0, 0),
    (26, 7, 'grass', 1, 0),
    (27, 7, 'grass', 0, 1),
    (28, 7, 'grass', 1, 1),
    
    (29, 8, 'grass', 0, 0),
    (30, 8, 'grass', 1, 0),
    (31, 8, 'grass', 0, 1),
    (32, 8, 'grass', 1, 1),

-- game 3 for shred
	(33, 9, 'grass', 0, 0),
    (34, 9, 'grass', 1, 0),
    (35, 9, 'grass', 0, 1),
    (36, 9, 'grass', 1, 1),
    
    (37, 10, 'grass', 0, 0),
    (38, 10, 'grass', 1, 0),
    (39, 10, 'grass', 0, 1),
    (40, 10, 'grass', 1, 1),
    
    (41, 11, 'grass', 0, 0),
    (42, 11, 'grass', 1, 0),
    (43, 11, 'grass', 0, 1),
    (44, 11, 'grass', 1, 1),
    
    (45, 12, 'grass', 0, 0),
    (46, 12, 'grass', 1, 0),
    (47, 12, 'grass', 0, 1),
    (48, 12, 'grass', 1, 1);

insert into hero values
	(1, 1, 1, 10, 3, false, false, false, false, 0, 50),
    (2, 2, 17, 10, 3, false, false, false, false, 0, 50),
    (3, 3, 33, 10, 3, false, false, false, false, 0, 50);
    
insert into monster values
	(1, 2, 20);
    