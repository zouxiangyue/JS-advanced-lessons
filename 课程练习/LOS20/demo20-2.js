//正则表达式中的特殊字符

 // \:反斜杠也可以将其后的特殊字符，转义为字面量。例如，模式 /a*/ 代表会匹配 0 个或者多个 a。
 //相反，模式 /a\*/ 将 '*' 的特殊性移除，从而可以匹配像 "a*" 这样的字符串。

 /*
 ^	:匹配输入的开始
例如，/^A/ 会匹配 "An E" 中的 'A',并不会匹配 "an A" 中的 'A'.

$	:匹配输入的结束。
例如，/t$/ 会匹配 "eat" 中的 't'。并不会匹配 "an A" 中的 'A'.

*	:匹配前一个表达式0次或多次。等价于 {0,}。
例如，/bo*/ //会匹配 "A ghost boooooed" 中的 'booooo' 和 "A bird warbled" 中的 'b'，但是在 "A goat grunted" 中将不会匹配任何东西。

/*
+	:匹配前面一个表达式1次或者多次。等价于 {1,}。
例如，/a+/匹配了在 "candy" 中的 'a'，和在 "caaaaaaandy" 中所有的 'a'。

?	:匹配前面一个表达式0次或者1次。等价于 {0,1}。
例如，/e?le?/ 匹配 "angel" 中的 'el'，和 "angle" 中的 'le' 以及"oslo' 中的'l'。
?=n	匹配任何其后紧接指定字符串 n 的字符串。
?!n	匹配任何其后没有紧接指定字符串 n 的字符串。

.	:（小数点）匹配除换行符之外的任何单个字符。
例如，/.n/将会匹配 "nay, an apple is on the tree" 中的 'an' 和 'on'，但是不会匹配 'nay'
*/

/*
\w	查找单字字符(字母、数字或者下划线)。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。

\W	查找非单字字符。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。

\d	匹配一个数字。等价于[0-9]。
例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'。

\D	匹配一个非数字字符。等价于[^0-9]。
例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B' 。

\s	匹配一个空白字符，包括空格、制表符、换页符和换行符。
例如， /\S\w*/ //匹配"foo bar."中的' foo'
/*
\S	查找非空白字符。匹配一个非空白字符。
例如， /\S\w*/ //匹配"foo bar."中的'foo'
/*
\b	匹配单词边界。
例子：/\bm/匹配“moon”中得‘m’；/oo\b/并不匹配"moon"中得'oo'，因为'oo'被一个“字”字符'n'紧跟着。

\B	匹配非单词边界。
*/

/*
\0	查找 NULL 字符。
\n	查找换行符。
\f	查找换页符。
\r	查找回车符。
\t	查找制表符。
\v	查找垂直制表符。
\xxx	查找以八进制数 xxx 规定的字符。
\xdd	查找以十六进制数 dd 规定的字符。
\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。
*/

/**
 * n{X}	
匹配包含 X 个 n 的序列的字符串。
例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。

n{X,}	
X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。
例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。

n{X,Y}	
X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。
例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，
当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。
 */


 //方括号
 /*
[abc]	查找方括号之间的任何字符。
[^abc]	查找任何不在方括号之间的字符。
[0-9]	查找任何从 0 至 9 的数字。
[a-z]	查找任何从小写 a 到小写 z 的字符。
[A-Z]	查找任何从大写 A 到大写 Z 的字符。
[A-z]	查找任何从大写 A 到小写 z 的字符。
[adgk]	查找给定集合内的任何字符。
[^adgk]	查找给定集合外的任何字符。
(red|blue|green)	查找任何指定的选项。
*/