create database E_Commerce
use E_Commerce

create table Users(
	id varchar(5) primary key,
	username varchar(50),
	password varchar(50),
	customer_name nvarchar(max),
	phone varchar(20),
	house_address nvarchar(100),
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
	gender nvarchar(10),
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
	address varchar(max),
	create_date smalldatetime,
	total int,

	FOREIGN KEY (customer_id) REFERENCES Users(id)
)

create table CartInfo(
	cart_id varchar(9),
	product_id varchar(10),
	slug varchar(50),
	color varchar(50),
	size varchar(50),
	amount int,
	price int

	primary key (cart_id, product_id, color, size),
	foreign key (cart_id) references Cart(id),
	foreign key (product_id) references Product(id)
)





insert into Users values('aaaaa','admin','admin',N'Nguyễn Hoàng Thái Dương','0366330205',N'30 đường Lê Hồng Phong',N'Hồ Chí Minh',N'Bình Tân',N'Bình trị Đông B')
insert into Users values('aaaad','admin@gmail.com','admin',N'Nguyễn Hoàng Thái Dương','0366330205',N'481 Tỉnh Lộ 10',N'Thành phố Hồ Chí Minh',N'Quận Bình Tân',N'Phường Bình Trị Đông B')

