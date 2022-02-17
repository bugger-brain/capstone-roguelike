drop database if exists roguelike_test;
create database roguelike_test;
use roguelike_test;

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
    hp int not null,
    air boolean null,
    water boolean null,
    earth boolean null,
    fire boolean null,
    `key` int null,
    gold int not null
);

create table monster(
	monster_id int primary key auto_increment,
    hp int not null
);



insert into tile (tile_id, map_id, `type`, x, y) values
(1, 0, 'grass', 0, 0),
(2, 0, 'grass', 0, 1),
(3, 0, 'grass', 0, 2),
(4, 0, 'grass', 0, 3),
(5, 0, 'grass', 0, 4),
(6, 0, 'grass', 0, 5),
(7, 0, 'grass', 0, 6),
(8, 0, 'grass', 0, 7),
(9, 0, 'grass', 0, 8),
(10, 0, 'grass', 0, 9),
(11, 0, 'grass', 0, 10),
(12, 0, 'grass', 0, 11),
(13, 0, 'water', 0, 12),
(14, 0, 'water', 0, 13),
(15, 0, 'grass', 0, 14),
(16, 0, 'grass', 0, 15),
(17, 0, 'grass', 1, 0),
(18, 0, 'grass', 1, 1),
(19, 0, 'grass', 1, 2),
(20, 0, 'grass', 1, 3),
(21, 0, 'grass', 1, 4),
(22, 0, 'grass', 1, 5),
(23, 0, 'grass', 1, 6),
(24, 0, 'grass', 1, 7),
(25, 0, 'grass', 1, 8),
(26, 0, 'grass', 1, 9),
(27, 0, 'grass', 1, 10),
(28, 0, 'grass', 1, 11),
(29, 0, 'grass', 1, 12),
(30, 0, 'water', 1, 13),
(31, 0, 'water', 1, 14),
(32, 0, 'water', 1, 15),
(33, 0, 'grass', 2, 0),
(34, 0, 'grass', 2, 1),
(35, 0, 'grass', 2, 2),
(36, 0, 'grass', 2, 3),
(37, 0, 'grass', 2, 4),
(38, 0, 'grass', 2, 5),
(39, 0, 'grass', 2, 6),
(40, 0, 'grass', 2, 7),
(41, 0, 'grass', 2, 8),
(42, 0, 'grass', 2, 9),
(43, 0, 'grass', 2, 10),
(44, 0, 'grass', 2, 11),
(45, 0, 'grass', 2, 12),
(46, 0, 'water', 2, 13),
(47, 0, 'water', 2, 14),
(48, 0, 'water', 2, 15),
(49, 0, 'grass', 3, 0),
(50, 0, 'grass', 3, 1),
(51, 0, 'grass', 3, 2),
(52, 0, 'grass', 3, 3),
(53, 0, 'grass', 3, 4),
(54, 0, 'grass', 3, 5),
(55, 0, 'grass', 3, 6),
(56, 0, 'grass', 3, 7),
(57, 0, 'grass', 3, 8),
(58, 0, 'grass', 3, 9),
(59, 0, 'grass', 3, 10),
(60, 0, 'grass', 3, 11),
(61, 0, 'grass', 3, 12),
(62, 0, 'water', 3, 13),
(63, 0, 'water', 3, 14),
(64, 0, 'water', 3, 15),
(65, 0, 'grass', 4, 0),
(66, 0, 'grass', 4, 1),
(67, 0, 'grass', 4, 2),
(68, 0, 'grass', 4, 3),
(69, 0, 'grass', 4, 4),
(70, 0, 'grass', 4, 5),
(71, 0, 'grass', 4, 6),
(72, 0, 'grass', 4, 7),
(73, 0, 'grass', 4, 8),
(74, 0, 'grass', 4, 9),
(75, 0, 'grass', 4, 10),
(76, 0, 'grass', 4, 11),
(77, 0, 'grass', 4, 12),
(78, 0, 'water', 4, 13),
(79, 0, 'water', 4, 14),
(80, 0, 'water', 4, 15),
(81, 0, 'grass', 5, 0),
(66, 0, 'grass', 5, 1),
(67, 0, 'grass', 5, 2),
(68, 0, 'grass', 5, 3),
(69, 0, 'grass', 5, 4),
(70, 0, 'grass', 5, 5),
(71, 0, 'grass', 5, 6),
(72, 0, 'grass', 5, 7),
(73, 0, 'grass', 5, 8),
(74, 0, 'grass', 5, 9),
(75, 0, 'grass', 5, 10),
(76, 0, 'grass', 5, 11),
(77, 0, 'grass', 5, 12),
(78, 0, 'water', 5, 13),
(79, 0, 'water', 5, 14),
(80, 0, 'water', 5, 15),
(81, 0, 'grass', 6, 0),
(82, 0, 'grass', 6, 1),
(83, 0, 'grass', 6, 2),
(84, 0, 'grass', 6, 3),
(85, 0, 'grass', 6, 4),
(86, 0, 'grass', 6, 5),
(87, 0, 'grass', 6, 6),
(88, 0, 'grass', 6, 7),
(89, 0, 'grass', 6, 8),
(90, 0, 'grass', 6, 9),
(91, 0, 'grass', 6, 10),
(92, 0, 'grass', 6, 11),
(93, 0, 'grass', 6, 12),
(94, 0, 'water', 6, 13),
(95, 0, 'water', 6, 14),
(96, 0, 'water', 6, 15),
(97, 0, 'grass', 7, 0),
(98, 0, 'grass', 7, 1),
(99, 0, 'grass', 7, 2),
(100, 0, 'grass', 7, 3),
(101, 0, 'grass', 7, 4),
(102, 0, 'grass', 7, 5),
(103, 0, 'grass', 7, 6),
(104, 0, 'grass', 7, 7),
(105, 0, 'grass', 7, 8),
(106, 0, 'grass', 7, 9),
(107, 0, 'grass', 7, 10),
(108, 0, 'grass', 7, 11),
(109, 0, 'grass', 7, 12),
(110, 0, 'water', 7, 13),
(111, 0, 'water', 7, 14),
(112, 0, 'water', 7, 15);
