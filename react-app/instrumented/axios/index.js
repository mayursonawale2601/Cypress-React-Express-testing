function cov_2rdnro4vb2() {
  var path = "/Users/mayursonawale/Study material/Sem 2/CA650 Software Process Quality/Assignments/2nd Assignment/CA650 2nd Assignment/react-app/src/axios/index.js";
  var hash = "7c92df734fa69c5664d83db1a1f409b21ed20ab3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mayursonawale/Study material/Sem 2/CA650 Software Process Quality/Assignments/2nd Assignment/CA650 2nd Assignment/react-app/src/axios/index.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "1": {
        start: {
          line: 20,
          column: 13
        },
        end: {
          line: 20,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "submitApplication",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 8,
            column: 3
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7c92df734fa69c5664d83db1a1f409b21ed20ab3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2rdnro4vb2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2rdnro4vb2();
import axios from "./instance";
function submitApplication({
  fname,
  lname,
  email,
  phones
}) {
  cov_2rdnro4vb2().f[0]++;
  cov_2rdnro4vb2().s[0]++;
  return axios.post('form', {
    fname,
    lname,
    email,
    phones
  });
}
;
const apis = (cov_2rdnro4vb2().s[1]++, {
  submitApplication
});
export default apis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMnJkbnJvNHZiMiIsImFjdHVhbENvdmVyYWdlIiwiYXhpb3MiLCJzdWJtaXRBcHBsaWNhdGlvbiIsImZuYW1lIiwibG5hbWUiLCJlbWFpbCIsInBob25lcyIsImYiLCJzIiwicG9zdCIsImFwaXMiXSwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIi4vaW5zdGFuY2VcIjtcblxuZnVuY3Rpb24gc3VibWl0QXBwbGljYXRpb24oe1xuICBmbmFtZSxcbiAgbG5hbWUsXG4gIGVtYWlsLFxuICBwaG9uZXNcbn0pIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXG4gICAgJ2Zvcm0nLFxuICAgIHtcbiAgICAgIGZuYW1lLFxuICAgICAgbG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBob25lc1xuICAgIH1cbiAgKVxufTtcblxuY29uc3QgYXBpcyA9IHsgc3VibWl0QXBwbGljYXRpb24gfTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosT0FBT0UsS0FBSyxNQUFNLFlBQVk7QUFFOUIsU0FBU0MsaUJBQWlCQSxDQUFDO0VBQ3pCQyxLQUFLO0VBQ0xDLEtBQUs7RUFDTEMsS0FBSztFQUNMQztBQUNGLENBQUMsRUFBRTtFQUFBUCxjQUFBLEdBQUFRLENBQUE7RUFBQVIsY0FBQSxHQUFBUyxDQUFBO0VBQ0QsT0FBT1AsS0FBSyxDQUFDUSxJQUFJLENBQ2YsTUFBTSxFQUNOO0lBQ0VOLEtBQUs7SUFDTEMsS0FBSztJQUNMQyxLQUFLO0lBQ0xDO0VBQ0YsQ0FDRixDQUFDO0FBQ0g7QUFBQztBQUVELE1BQU1JLElBQUksSUFBQVgsY0FBQSxHQUFBUyxDQUFBLE9BQUc7RUFBRU47QUFBa0IsQ0FBQztBQUVsQyxlQUFlUSxJQUFJIiwiaWdub3JlTGlzdCI6W119