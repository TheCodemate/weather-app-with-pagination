class ThrowError {
  static ifStatusNotOk(status) {
    if (!status) {
      throw new Error('Data couldnt be fetched');
    }
  }
}
export default ThrowError;
