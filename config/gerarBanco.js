import Produto from "../models/Produto.js";
import Usuario from "../models/Usuario.js";
import Cliente from "../models/Cliente.js";

await Produto.sync()
await Usuario.sync()
await Cliente.sync()