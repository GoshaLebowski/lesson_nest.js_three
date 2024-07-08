import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User } from "@prisma/client";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
  }

  public async generateJwtToken(user: any): Promise<string> {
    const payload = { user };
    return this.jwtService.sign(payload, {
      secret: this.configService.get('secret'),
      expiresIn: this.configService.get('expireJwt')
    })
  }
}
