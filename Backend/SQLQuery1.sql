create database E_Commerce
use E_Commerce

create table Users(
	id varchar(5) primary key,
	username varchar(50),
	password varchar(50),
	customer_name varchar(max),
	phone varchar(20),
	address1 nvarchar(100),
	address2 nvarchar(100),
	address3 nvarchar(100),
)

create table Category(
	id varchar(10) primary key,
	display varchar(50),
)

create table Product(
	id varchar(10) primary key,
	title nvarchar(100),
	id_cate varchar(10),
	categorySlug varchar(max),
	gender bit,
	image1 varchar(max),
	image2 varchar(max),
	price int,
	slug varchar(100),
	colors varchar(100),
	size varchar(50),
	descriptions nvarchar(max)

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
	slug varchar(50),
	color varchar(50),
	amount int,
	price int

	primary key (cart_id, product_id),
	foreign key (cart_id) references Cart(id),
	foreign key (product_id) references Product(id)
)





insert into Users values('aaaaa','admin','admin','Nguyễn Hoàng Thái Dương','thaiduong020501@gmail.com','0366330205',N'Hồ Chí Minh',N'Bình Tân',N'Bình trị Đông B')
insert into Users values('aaaad','admin@gmail.com','admin','Nguyễn Hoàng Thái Dương','thaiduong020501@gmail.com','0366330205',N'Hồ Chí Minh',N'Bình Tân',N'Bình trị Đông B')

