class MessageNameRangeError extends RangeError
{
  constructor(...args)
  {
    super(...args)
    this.code = 'ERR_NAME_RANGE_ERROR'
  }
}

module.exports = MessageNameRangeError
