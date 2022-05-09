const { GraphQLScalarType, Kind } = require('graphql');
var moment = require('moment')

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'The `DateTime` scalar represents a date and time following the ISO 8601 standard',
  serialize(value) {
    return value
  },
  parseValue(value) {
    if (!moment(value).isValid) {
      throw new TypeError(
        `DateTime must be in a recognized RFC2822 or ISO 8601 format ${String(value)}.`
      )
    }

    return moment.utc(value).toISOString()
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(
        `DateTime cannot represent non string type ${String(ast.value != null ? ast.value : null)}`
      )
    }

    return moment.utc(ast.value).toISOString()
  }
});

module.exports = DateTime;
