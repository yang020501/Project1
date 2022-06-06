create database E_Commerce
use E_Commerce

create table Users(
	id varchar(5) primary key,
	username varchar(50),
	passwords varchar(50),
	customer_name varchar(max)
)

create table Category(
	id varchar(10) primary key,
	name varchar(50)
)

create table Product(
	id varchar(10) primary key,
	name varchar(100),
	id_cate varchar(10),
	images varchar(max),
	price int,
	slug varchar(100),
	color varchar(100),
	size varchar(50),
	descriptions varchar(max)

	FOREIGN KEY (id_cate) REFERENCES Category(id)
)

create table Cart(
	id varchar(9) primary key,
	customer_id varchar(5),
	create_date smalldatetime,
	total int,

	FOREIGN KEY (customer_id) REFERENCES Users(id)
)

create table CartInfo(
	cart_id varchar(9),
	product_id varchar(10),
	amount int

	primary key (cart_id, product_id),
	foreign key (cart_id) references Cart(id),
	foreign key (product_id) references Product(id)
)

insert into Category values ('erq135r5to', 'ao quan');
insert into Category values ('rqt6yu748o', 'phu kien')

insert into Product values ('trwyhnbd47', 'ao thung nam', 'erq135r5to', 'null', '900000', 'null', 'xanh', 'M', 'lalalalla')
