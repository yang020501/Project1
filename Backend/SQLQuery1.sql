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
	display varchar(50),
)

create table Product(
	id varchar(10) primary key,
	title varchar(100),
	id_cate varchar(10),
	categorySlug varchar(max),
	image1 varchar(max),
	image2 varchar(max),
	price int,
	slug varchar(100),
	colors varchar(100),
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

insert into Category values ('erq200113r', 'ao thun');
insert into Category values ('erq135r5to', 'quan thun');
insert into Category values ('erq55122d1', 'quan kaki');
insert into Category values ('erq231146o', 'ao len');
insert into Category values ('rqt6yu748o', 'phu kien')

insert into Product values ('trwyhnbd47', 'ao thun nam', 'erq200113r','ao-thun','null', 'null', '900000', 'null', 'xanh', 'M', 'lalalalla')
insert into Product values ('74516ffssg', 'ao thun nu', 'erq200113r','ao-thun','null', 'null', '900000', 'null', 'do', 'M,X', 'lalalalla')
insert into Product values ('tf6234ytfa', 'quan thun nam', 'erq135r5to','quan-thun','null', 'null', '900000', 'null', 'tim', 'S', 'lalalalla')
insert into Product values ('67234cccas', 'quan kaki nam', 'erq55122d1','quan-kaki','null', 'null', '900000', 'null', 'vang', 'XL', 'lalalalla')
insert into Product values ('awsdg52345', 'ao len', 'erq231146o','ao-len' ,'null','null', '900000', 'null', 'den', 'S', 'lalalalla')
insert into Product values ('asd5567111', 'vong tay go', 'rqt6yu748o', 'phu-kien','null','null', '1400000', 'null', 'xanh', '', 'memememe')
insert into Product values ('asc623ggg1', 'nhan deo', 'rqt6yu748o','phu-kien' ,'null','null', '5600000', 'null', 'do', '', 'memememe')