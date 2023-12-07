import { Provider } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';
import { DataShareService } from 'src/app/services/data-share.service';
import { UserService } from 'src/app/services/user.service';

export function provideCore(): Provider[] {
  return [
    DataShareService,
    UserService,
    AuthService,
    ApiService,
    ClassMapperService,
  ];
}
