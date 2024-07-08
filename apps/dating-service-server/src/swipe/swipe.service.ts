import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SwipeServiceBase } from "./base/swipe.service.base";

@Injectable()
export class SwipeService extends SwipeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
