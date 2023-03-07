/*
 * Servicios
 */
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { ClassMapperService } from './services/class-mapper.service';
import { DataShareService } from './services/data-share.service';
import { UserService } from './services/user.service';

export const SERVICES: any[] = [
  DataShareService,
  UserService,
  AuthService,
  ApiService,
  ClassMapperService,
];
