drop database if exists roguelike;
create database roguelike;
use roguelike;

create table player(
	player_id int primary key auto_increment,
    username varchar(255) not null,
    `password` varchar(255) not null
);

create table game(
	game_id int primary key,
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
        references tile(tile_id)
);

create table monster(
	monster_id int primary key auto_increment,
    tile_id int not null,
    hp int not null,
    constraint fk_monster_tile_id
		foreign key (tile_id)
        references tile(tile_id)
);


insert into player values
	(1, 'pagoto', 'qwe123');
    
insert into game values
	(1, 1, false, 0);
    
insert into map values
	(1, 1, 0, 0), 
    (2, 1, 1, 0),
    (3, 1, 0, 1),
    (4, 1, 1, 1);

insert into tile values
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
    (16, 4, 'grass', 1, 1);

insert into hero values
	(1, 1, 3, 10, false, false, false, false, 0, 50);
    
insert into monster values
	(1, 2, 20);
    