var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log('server is running');
var cors = require('cors');
var bodyParser = require('body-parser');
var express = require('express'), app = express(), port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, '127.0.0.1');
var dbKapcsolat = require('knex')({
    client: 'mssql',
    connection: {
        host: "127.0.0.1",
        port: 2957,
        user: "sa",
        password: 'Servantes1.',
        database: 'nodetest'
    }
});
app.route('/listaz').post(function (req, resp) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    /*var mezõ1 = kérés.body.mezõ1;
                
                    válasz.json({ válaszmezõ1: érték, válaszmezõ2: érték, ...});*/
                    console.log('valami');
                    return [4 /*yield*/, dbKapcsolat.select().from('test2')];
                case 1:
                    result = _a.sent();
                    resp.json(result);
                    return [2 /*return*/];
            }
        });
    });
});
app.route('/kuld').post(function (req, resp) {
    return __awaiter(this, void 0, void 0, function () {
        var insert;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbKapcsolat('test2').insert({ text: req.body.text, int_value: 1, status: 1, password: req.body.password })];
                case 1:
                    insert = _a.sent();
                    resp.json(insert);
                    return [2 /*return*/];
            }
        });
    });
});
app.route('/modosit').post(function (req, resp) {
    return __awaiter(this, void 0, void 0, function () {
        var insert;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbKapcsolat('test2').update({ text: req.body.text, password: req.body.password }).where({ id: req.body.id })];
                case 1:
                    insert = _a.sent();
                    resp.json(insert);
                    return [2 /*return*/];
            }
        });
    });
});
app.route('/torles').post(function (req, resp) {
    return __awaiter(this, void 0, void 0, function () {
        var insert;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbKapcsolat('test2').delete().where({ id: req.body.id })];
                case 1:
                    insert = _a.sent();
                    resp.json(insert);
                    return [2 /*return*/];
            }
        });
    });
});
