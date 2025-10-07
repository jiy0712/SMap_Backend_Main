"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const typeorm_1 = require("typeorm");
let News = class News {
};
exports.News = News;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'num' }),
    __metadata("design:type", Number)
], News.prototype, "num", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'crimeType', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], News.prototype, "crimeType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'location', type: 'text', nullable: true }),
    __metadata("design:type", String)
], News.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'crimeDay', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], News.prototype, "crimeDay", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'newsLink', type: 'text', nullable: true }),
    __metadata("design:type", String)
], News.prototype, "newsLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', type: 'text', nullable: true }),
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'trust', type: 'float', nullable: true }),
    __metadata("design:type", Number)
], News.prototype, "trust", void 0);
exports.News = News = __decorate([
    (0, typeorm_1.Entity)({ name: 'news' })
], News);
//# sourceMappingURL=news.entity.js.map