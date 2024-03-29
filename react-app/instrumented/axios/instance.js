function cov_1fpkfbcbew() {
  var path = "/Users/mayursonawale/Study material/Sem 2/CA650 Software Process Quality/Assignments/2nd Assignment/CA650 2nd Assignment/react-app/src/axios/instance.js";
  var hash = "5847c876c3afb9f6374f5971dbe7e920d7d6acc8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mayursonawale/Study material/Sem 2/CA650 Software Process Quality/Assignments/2nd Assignment/CA650 2nd Assignment/react-app/src/axios/instance.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 5,
          column: 2
        }
      },
      "1": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 53
        }
      },
      "3": {
        start: {
          line: 11,
          column: 19
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 30
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 19
          },
          end: {
            line: 11,
            column: 20
          }
        },
        loc: {
          start: {
            line: 11,
            column: 30
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5847c876c3afb9f6374f5971dbe7e920d7d6acc8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fpkfbcbew = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1fpkfbcbew();
import axios from "axios";
const instance = (cov_1fpkfbcbew().s[0]++, axios.create({
  baseURL: "http://localhost:8000/"
}));
cov_1fpkfbcbew().s[1]++;
const invokeAuth = token => {
  cov_1fpkfbcbew().f[0]++;
  cov_1fpkfbcbew().s[2]++;
  instance.defaults.headers['Authorization'] = token;
};
cov_1fpkfbcbew().s[3]++;
const revokeAuth = token => {
  cov_1fpkfbcbew().f[1]++;
  cov_1fpkfbcbew().s[4]++;
  delete instance.defaults.headers['Authorization'];
};
export default instance;
export { invokeAuth, revokeAuth };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWZwa2ZiY2JldyIsImFjdHVhbENvdmVyYWdlIiwiYXhpb3MiLCJpbnN0YW5jZSIsInMiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW52b2tlQXV0aCIsInRva2VuIiwiZiIsImRlZmF1bHRzIiwiaGVhZGVycyIsInJldm9rZUF1dGgiXSwic291cmNlcyI6WyJpbnN0YW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCIsXG59KTtcblxuY29uc3QgaW52b2tlQXV0aCA9ICh0b2tlbikgPT4ge1xuICBpbnN0YW5jZS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcbn07XG5cbmNvbnN0IHJldm9rZUF1dGggPSAodG9rZW4pID0+IHtcbiAgZGVsZXRlIGluc3RhbmNlLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuZXhwb3J0IHtpbnZva2VBdXRoLCByZXZva2VBdXRofTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLE9BQU9FLEtBQUssTUFBTSxPQUFPO0FBRXpCLE1BQU1DLFFBQVEsSUFBQUgsY0FBQSxHQUFBSSxDQUFBLE9BQUdGLEtBQUssQ0FBQ0csTUFBTSxDQUFDO0VBQzVCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLENBQUM7QUFBQ04sY0FBQSxHQUFBSSxDQUFBO0FBRUgsTUFBTUcsVUFBVSxHQUFJQyxLQUFLLElBQUs7RUFBQVIsY0FBQSxHQUFBUyxDQUFBO0VBQUFULGNBQUEsR0FBQUksQ0FBQTtFQUM1QkQsUUFBUSxDQUFDTyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBR0gsS0FBSztBQUNwRCxDQUFDO0FBQUNSLGNBQUEsR0FBQUksQ0FBQTtBQUVGLE1BQU1RLFVBQVUsR0FBSUosS0FBSyxJQUFLO0VBQUFSLGNBQUEsR0FBQVMsQ0FBQTtFQUFBVCxjQUFBLEdBQUFJLENBQUE7RUFDNUIsT0FBT0QsUUFBUSxDQUFDTyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDbkQsQ0FBQztBQUVELGVBQWVSLFFBQVE7QUFDdkIsU0FBUUksVUFBVSxFQUFFSyxVQUFVIiwiaWdub3JlTGlzdCI6W119