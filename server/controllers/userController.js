const { User, UserInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class UserController {
  async create(req, res, next) {
    try {
      let { nickname, real_name, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const user = await User.create({ nickname, real_name, img: fileName });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          UserInfo.create({
            origin_description: i.origin_description,
            catch_phrase: i.catch_phrase,
            superpowers: i.superpowers,
            userId: user.id,
          })
        );
      }

      return res.json(user);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;
    let users = await User.findAndCountAll({ limit, offset });

    return res.json(users);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      include: [{ model: UserInfo, as: "info" }],
    });
    return res.json(user);
  }
}

module.exports = new UserController();
