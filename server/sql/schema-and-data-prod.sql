drop database if exists roguelike;
create database roguelike;
use roguelike;

create table player(
	player_id int primary key auto_increment,
    username varchar(255) not null,
    `password` varchar(255) not null
);

create table score(
	player_id int not null,
    score int not null
);

create table game(
	game_id int not null,
    player_id int null,
	is_blueprint boolean
);

create table map(
	map_id int primary key auto_increment,
    world_id int not null,
    x int not null,
    y int not null
);

create table tile(
	tile_id int primary key auto_increment,
    map_id int not null,
    `type` varchar(255) not null,
    x int not null,
    y int not null
);

create table hero(
	hero_id int primary key auto_increment,
    tile_id int not null,
    elements varchar(255) null,
    hp int not null
);

create table monster(
	monster_id int primary key auto_increment,
    tile_id int not null,
    hp int not null,
    location int not null
);


