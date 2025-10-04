import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';

@Injectable()
export class PrisService extends PrismaClient {}

