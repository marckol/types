/* 
 * The MIT License
 *
 * Copyright 2021 Marc KAMGA Olivier <kamga_marco@yahoo.com;mkamga.olivier@gmail.com>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Returns an array that contains distinct elements retrieved from the given 
 * array set.
 * @param {Array} s  The array set to retrieve distinct elements.
 * @param {Function|Object} [compare=null] The compare function or the comparator object. 
 *     <p>The valid cases are the followings:</p>
 *     <ul>
 *     <li>No compare argument or each value evaluated to false (null, undefined, false, 0, ''): '===' operator will be used to compare elements</li>
 *     <li>compare as function:  it should returns 0 when the two arguments are equals. </li>
 *     <li>compare as plain object with compare method: compare method should returns 0 when the two arguments are equals. </li>
 *     </ul>
 * @returns {Array|distinct.res}
 * @throws {Error} When compare argument is incorrect
 */
function distinct(s, compare) {
    var res = [], e;
    if (!compare) {
        for (var i = 0, n = s.length; i < n; i++) {
            e = s[i];
            if (res.indexOf(e) < 0) {
                res[res.length] = e;
            }
        }
    } else if (typeof compare === 'function') {
        var found;
        for (var i = 0, n = s.length; i < n; i++) {
            e = s[i];
            found = false;
            for (var j = 0; j < res.length; j++) {
                if (compare(e,res[j]) === 0) { // if equals
                    found = true;
                    break;
                }
            }
            if (!found) {
                res[res.length] = e;
            }
        }
    } else if (typeof compare.compare === 'function') {
        var found;
        for (var i = 0, n = s.length; i < n; i++) {
            e = s[i];
            found = false;
            for (var j = 0; j < res.length; j++) {
                if (compare.compare(e,res[j]) === 0) { // if equals
                    found = true;
                    break;
                }
            }
            if (!found) {
                res[res.length] = e;
            }
        }
    } else {
        throw new Error("Incorrect comparator");
    }
    return res;
}

/**
 * 
 * Source: http://rosskendall.com/blog/web/javascript-function-to-check-an-email-address-conforms-to-rfc822
 * @param {String} sEmail
 * @returns {Boolean}
 * 
 */
function isRFC822ValidEmail(sEmail) {
    var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
    var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
    var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
    var sQuotedPair = '\\x5c[\\x00-\\x7f]';
    var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
    var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
    var sDomain_ref = sAtom;
    var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
    var sWord = '(' + sAtom + '|' + sQuotedString + ')';
    var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
    var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
    var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
    var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

    var reValidEmail = new RegExp(sValidEmail);

    if (reValidEmail.test(sEmail)) {
        return true;
    }

    return false;
}
