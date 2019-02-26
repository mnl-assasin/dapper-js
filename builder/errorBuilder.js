class ErrorBuilder {
  build(code, status, reason) {
    return {
      code,
      status,
      reason
    };
  }
}

module.exports = new ErrorBuilder();
