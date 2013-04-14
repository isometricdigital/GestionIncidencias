
create database db_incidencias;

	create table estados(
		id bigint not null,
		denominacion varchar(25) character set utf8 not null,
		constraint primary key (id)
		)ENGINE=InnoDB DEFAULT CHARSET=utf8;

	create table departamentos(
		id bigint not null auto_increment,
		nombre varchar(50) character set utf8 not null,
		constraint primary key (id)
		)ENGINE=InnoDB DEFAULT CHARSET=utf8;

	create table empleados(
		id varchar(9) not null,
		nombre varchar(50) character set utf8 not null,
		correo varchar(60) character set utf8 not null,
		idDepartamento bigInt not null,
		constraint primary key (id), 
		constraint id_dep_fk foreign key (idDepartamento) references departamentos(id)
		)ENGINE=InnoDB DEFAULT CHARSET=utf8;

	create table encargados(
		idEncargado varchar(9) not null,
		usuario varchar(25) character set utf8 not null, 
		clave varchar(12) character set utf8 not null, 
		constraint primary key (idEncargado),
		constraint id_encargado_fk foreign key (idEncargado) references empleados(id)
		)ENGINE=InnoDB DEFAULT CHARSET=utf8;


	create table incidencias(
		id bigint not null auto_increment,
		asunto varchar(50) character set utf8 not null,
		descripcion varchar(255) character set utf8 not null,
		fecha date, 
		imagen varchar(255) character set utf8,
		solucion varchar(255) character set utf8,
		idEstado bigint default 1 not null,
		idEmpleado varchar(9) not null,
		constraint primary key (id),
		constraint id_estado_fk foreign key (idEstado) references estados(id),
		constraint id_empleado_fk foreign key (idEmpleado) references empleados(id)
		)ENGINE=InnoDB DEFAULT CHARSET=utf8;

	

	create table incidenciasCompletadas(
		idIncidencia bigint not null,
		asunto varchar(50) character set utf8 not null,
		descripcion varchar(255) character set utf8 not null,
		fecha date, 
		imagen varchar(255) character set utf8,
		solucion varchar(255) character set utf8,
		idEstado bigint not null,
		idEmpleado varchar(9) not null,
		constraint primary key(idIncidencia),
		constraint id_estadoCompletadas_fk foreign key (idEstado) references estados(id),
		constraint id_empleadoCompletadas_fk foreign key (idEmpleado) references empleados(id)
		)ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*INSERCIÓN DE DATOS*/

insert into estados (id, denominacion) values (1, 'solicitada'), (2, 'pendiente'), (3, 'completada')

insert into departamentos (nombre) values ('Tecnología'), ('Limpieza'), ('Marketing'), ('Ventas'), ('Recursos humano')

insert into empleados (id, nombre, correo, idDepartamento) values ('54778899E', 'Sara', 'teraxgirl@gmail.com', 1),
	('54898978S', 'Tania', 'tania@gmail.com', 2), ('54332211R', 'Aaron', 'aaron@gmail.com', 3),
	('54226578F', 'Aitor', 'aitor@gmail.com', 3)

/*Uno de nuestros empleados será el encargado*/
insert into encargados (idEncargado, usuario, clave) values ('54778899E', 'user', 'user')




insert into incidencias (asunto, descripcion, fecha, idEmpleado) values ('No puedo imprimir', 'Intento....', '2013-03-18', '54226578F')


