import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) return null;

    if (user.password === pass) {
      return user;
    }
  }

  async login(user) {
    const payload = { username: user.username, sub: user._id };

    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
