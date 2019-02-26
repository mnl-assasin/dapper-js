class ResultBuilder {
  build(data) {
    return {
      code: 200,
      status: "success",
      data: data
    };
  }
}

module.exports = new ResultBuilder();
