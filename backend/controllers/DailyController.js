import DailyModel from "../models/Daily.js";

export const create = async (req, res) => {
  try {
    const doc = new DailyModel({
      presenter: req.body.presenter,
      date: req.body.date,
    });

    const daily = await doc.save();

    res.json(daily);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Не удалось создать Daily",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const daily = await DailyModel.find();

    res.json(daily);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Не удалось получить дейлики",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const dailyId = req.params.id;

    const daily = await DailyModel.findById(dailyId);

    res.json(daily);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Не удалось получить Daily",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const dailyId = req.params.id;

    const dailyToDelete = await DailyModel.findByIdAndDelete(dailyId).catch(
      (err) => {
        console.log(err);
        res.status(500).json({
          msg: "Не удалось удалить Daily",
        });
      },
    );

    if (!dailyToDelete) {
      return res.status(500).json({
        msg: "Daily не найден",
      });
    }

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Не удалось удалить Daily",
    });
  }
};

export const update = async (req, res) => {
  try {
    const dailyId = req.params.id;
    await DailyModel.updateOne(
      {
        _id: dailyId,
      },
      {
        presenter: req.body.presenter,
        date: req.body.date,
      },
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Не удалось обновить Daily",
    });
  }
};
