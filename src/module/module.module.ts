import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'output/entities/Customer';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
// import { Countries } from 'output/entities/Countries';
// import { Departments } from 'output/entities/Departments';
// import { Employees } from 'output/entities/Employees';
// import { JobHistory } from 'output/entities/JobHistory';
// import { Jobs } from 'output/entities/Jobs';
// import { Locations } from 'output/entities/Locations';
// import { Regions } from 'output/entities/Regions';
import { Users } from 'output/entities/Users';
import passport from 'passport';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { LocalStrategy } from 'src/auth/local.strategy';
// import { ControllerController } from 'src/controller/controller.controller';
import { ConfigMulter } from 'src/multer/multer.middleware';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from 'src/product/product.service';
// import { ServiceService } from 'src/service/service.service';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // Regions,
      // Countries,
      // Locations,
      // Departments,
      // Employees,
      // JobHistory,
      // Jobs,
      Users,
      ProductCategory,
      Customer,
      Orders,
      Product,
      OrderDetail,
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    }),
    MulterModule.register(ConfigMulter.Uploadfiles()),
  ],
  providers: [
    // ServiceService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    ProductService,
  ],
  controllers: [
    // ControllerController,
    // CountriesController,
    // DepartmentsController,
    // EmployeesController,
    UserController,
    ProductController,
  ],
  exports: [UserService],
})
export class ModuleModule {}
