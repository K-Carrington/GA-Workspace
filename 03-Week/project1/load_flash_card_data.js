
//
// Keep min deck length = (the max number of cards in game * 2) + 3 so as to have enough cards
// (e.g.: for max num cards = 2, min deck length must be 7;
//        for max num cards = 4, min deck length must be 11;
//                            6                          15
//        for max num cards = 10, min deck len must be 23;
//        for max num cards = 20, mun deck len must be 43; ...
//
/*var JLPT_Kanji_N5 = [];
JLPT_Kanji_N5[0] = ['<span class=""kanji"">口</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">く</span></td><br><td><span class=""kun"">くち</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>mouth</b>'];
JLPT_Kanji_N5[1] = ['<span class=""kanji"">上</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">じょう</span></td><br><td><span class=""kun"">うえ<div>あ</div><div>のぼ</div></span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>above, up, over</b>'];
JLPT_Kanji_N5[2] = ['<span class=""kanji"">入</span><br><br><br><br><br><br>', '<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">にゅう</span></td><br><td><span class=""kun"">はい<div>い</div></span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>enter</b>'];
JLPT_Kanji_N5[3] = ['<span class=""kanji"">川</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on""></span></td><br><td><span class=""kun"">かわ</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>river</b>'];
JLPT_Kanji_N5[4] = ['<span class=""kanji"">七</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">しち</span></td><br><td><span class=""kun"">なな<div>なの</div></span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>seven</b>'];
JLPT_Kanji_N5[5] = ['<span class=""kanji"">二</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">に</span></td><br><td><span class=""kun"">ふた<div>ふつ</div></span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>two</b>'];
JLPT_Kanji_N5[6] = ['<span class=""kanji"">三</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">さん</span></td><br><td><span class=""kun"">み<br />みっ</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>three</b>'];
JLPT_Kanji_N5[7] = ['<span class=""kanji"">山</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">さん</span></td><br><td><span class=""kun"">やま</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>mountain</b>'];

JLPT_Kanji_N5[8] = ['<span class=""kanji"">女</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">じょ</span></td><br><td><span class=""kun"">おんな</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>woman</b>'];
JLPT_Kanji_N5[9] = ['<span class=""kanji"">大</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">たい<div>だい</div></span></td><br><td><span class=""kun"">おお</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>big, large</b>'];
JLPT_Kanji_N5[10] = ['<span class=""kanji"">九</span><br><br><br><br><br><br', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">く<div>きゅう</div></span></td><br><td><span class=""kun"">ここの</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>nine</b>'];
JLPT_Kanji_N5[11] = ['<span class=""kanji"">人</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">にん<div>じん</div></span></td><br><td><span class=""kun"">ひと</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>person</b>'];
JLPT_Kanji_N5[12] = ['<span class=""kanji"">八</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">はち</span></td><br><td><span class=""kun"">やっ<div>よう</div></span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>eight</b>'];
JLPT_Kanji_N5[13] = ['<span class=""kanji"">下</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">か</span></td><br><td><span class=""kun"">した<div>さ</div><div>くだ</div></span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>below, down, under, beneath</b>'];
JLPT_Kanji_N5[14] = ['<span class=""kanji"">火</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on"">か</span></td><br><td><span class=""kun"">ひ</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>fire</b>'];
JLPT_Kanji_N5[15] = ['<span class=""kanji"">左</span><br><br><br><br><br><br>', 
'<div class=""conjug""><br><table><br><tr><br><th></th><br><th><span class=""on"">音読み</th><br><th><span class=""kun"">訓読み</th><br></tr><br><br><tr><br><th></th><br><td><span class=""on""></span></td><br><td><span class=""kun"">ひだり</span></td><br></tr><br><br><tr><br><th><br><br></table></div><br><br><b>left</b>'];
*/
// The JLPT_N5_Genki had audio and img, and no way to delimit sides
/* This one has too many tags
var Kanji_JLPT_N4 = [];
Kanji_JLPT_N4[0] = ['<div style='font-family: Arial; font-size: 30px;'>近</div><br><br><span class=""hint"">On Read:<br><br><a class=hint href=""#""<br>onclick=""this.style.display='none';document.getElementById('hint310037608').style.display='block';return false;""><br>Show On Read</a><div id=""hint310037608"" class=hint style=""display: none"">キン</div><br></span><br><br><span class=""hint"">Kun Read:<br><br><a class=hint href=""#""<br>onclick=""this.style.display='none';document.getElementById('hint309363584').style.display='block';return false;""><br>Show Kun Read</a><div id=""hint309363584"" class=hint style=""display: none"">ちか（い）</div><br></span><br><br><br>', 
'<div style='font-family: Arial; font-size: 20px;'>Close, soon</div><br><br><br><div style='font-family: Arial; font-size: 12px;'>On Read: キン[]</div><br><div style='font-family: Arial; font-size: 12px;'>Kun Read: ちか（い）[]</div><br><br><div style='font-family: Arial; font-size: 10px;color:black'>Grade 2</div><br><br><div style='font-family: Arial; font-size: 10px;'><img src=""chikai.gif"" /></div><br><div style='font-family: Arial; font-size: 10px;'></div><br><br><br><span class=""hint"">Mnemotechnic Verse:<br><br></span><br><br>'];
Kanji_JLPT_N4[1] = ['<div style='font-family: Arial; font-size: 30px;'>英</div><br><br><span class=""hint"">On Read:<br><br><a class=hint href=""#""<br>onclick=""this.style.display='none';document.getElementById('hint291566320').style.display='block';return false;""><br>Show On Read</a><div id=""hint291566320"" class=hint style=""display: none"">エイ</div><br></span><br><br><span class=""hint"">Kun Read:<br><br><a class=hint href=""#""<br>onclick=""this.style.display='none';document.getElementById('hint409266704').style.display='block';return false;""><br>Show Kun Read</a><div id=""hint409266704"" class=hint style=""display: none"">ー</div><br></span><br><br><br>', 
'<div style='font-family: Arial; font-size: 20px;'>English, England</div><br><br><br><div style='font-family: Arial; font-size: 12px;'>On Read: エイ[]</div><br><div style='font-family: Arial; font-size: 12px;'>Kun Read: ー[]</div><br><br><div style='font-family: Arial; font-size: 10px;color:black'>Grade 4</div><br><br><div style='font-family: Arial; font-size: 10px;'><img src=""ei.gif"" /></div><br><div style='font-family: Arial; font-size: 10px;'></div><br><br><br><span class=""hint"">Mnemotechnic Verse:<br><br></span><br><br>'];
Kanji_JLPT_N4[2] = ['', ''];
Kanji_JLPT_N4[3] = ['', ''];
Kanji_JLPT_N4[4] = ['', ''];
Kanji_JLPT_N4[5] = ['', ''];
Kanji_JLPT_N4[6] = ['', ''];
Kanji_JLPT_N4[7] = ['', ''];

Kanji_JLPT_N4[8] = ['', ''];
Kanji_JLPT_N4[9] = ['', ''];
Kanji_JLPT_N4[10] = ['', ''];
Kanji_JLPT_N4[11] = ['', ''];
Kanji_JLPT_N4[12] = ['', ''];
Kanji_JLPT_N4[13] = ['', ''];
Kanji_JLPT_N4[14] = ['', ''];
Kanji_JLPT_N4[15] = ['', '']; */

//var Kens_JTimes = [];

var Javascript1_cards = [];
Javascript1_cards[0] = ['this', 'Refers to the function\'s execution context'];
Javascript1_cards[1] = ['function', 'Defines a function expression'];
Javascript1_cards[2] = ['[]', ' Array initializer/literal syntax.'];
Javascript1_cards[3] = ['{}', 'Object initializer/literal syntax.'];
Javascript1_cards[4] = ['/ab+c/i', 'Regular expression literal syntax.'];
Javascript1_cards[5] = ['( ) ', 'Grouping operator.'];
Javascript1_cards[6] = ['Property accessors ', '<div>Member operators provide access to a property or method of an object</div><div>(object.property and object[""property""]).</div>'];
Javascript1_cards[7] = ['new', 'Creates an instance of a constructor.'];

Javascript1_cards[8] = ['A--', 'Postfix decrement operator.'];
Javascript1_cards[9] = ['++A', 'Prefix increment operator.'];
Javascript1_cards[10] = ['<span style=""font-family: Arial"">~</span>', ' <div>Bitwise NOT operator.</div>'];
Javascript1_cards[11] = ['in', 'The in operator determines whether an object has a given property.'];
Javascript1_cards[12] = ['instanceof', 'The instanceof operator determines whether an object is an instance of another object.'];
Javascript1_cards[13] = ['throw', 'Throws a user-defined exception.'];
Javascript1_cards[14] = ['try...catch', ' Marks a block of statements to try, and specifies a response, should an exception be thrown.'];
Javascript1_cards[15] = ['for...in ', 'Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.'];

console.log(Javascript1_cards[0]);


var Computer_Sci = [];
Computer_Sci[0] = ['<span class=""tags"">Linux</span><br /><br /><br>todo.txt:&nbsp;A <span class=cloze>[...]</span> in your todo.txt file represents a single task.', 
'<span class=""tags"">Linux</span><br /><br /><br>todo.txt:&nbsp;A <span class=cloze>single line</span> in your todo.txt file represents a single task.<br><br><br><div class=""extra""></div>'];
Computer_Sci[1] = ['<span class=""tags"">Linux</span><br /><br /><br>Linux: ps stands for <span class=cloze>[...]</span>.', 
'<span class=""tags"">Linux</span><br /><br /><br>Linux: ps stands for <span class=cloze>process status</span>.<br><br><br><div class=""extra""></div>'];
Computer_Sci[2] = ['What does grep stand for? ', 
'<b>G</b>lobally search a <b>r</b>egular <b>e</b>xpression and <b>p</b>rint.'];
Computer_Sci[3] = ['What is dpkg?', 
'A package manager for <i>Debian</i> based systems.'];
Computer_Sci[4] = ['What command tells you the directory you\'re currently in?', 
'pwd'];
Computer_Sci[5] = ['What is an absolute path?', 
'A path that begins in the root directory.<div><br /></div><div>Example: /etc/usr/share/X11</div>'];
Computer_Sci[6] = ['What is a relative path? ', 
'A path that begins in the current directory.'];
Computer_Sci[7] = ['What button autocompletes a command?', 
'Tab'];

console.log(Computer_Sci[0]);

Computer_Sci[8] = ['Using ls -l, what is the display order for file permissions? ', 
'Owner, Group, Others'];
Computer_Sci[9] = ['In bash, how do you pipe output from one command to another? ', 
'Using the pipe symbol (&nbsp;<code>|</code> )'];
Computer_Sci[10] = ['Which pages are generally more in depth: man or info?', 
'info'];
Computer_Sci[11] = ['What command option will produce a short usage description of the command and its options?', 
'h or --help'];
Computer_Sci[12] = ['In bash, how do you search for commands you\'ve already typed? ', 
'Using <span class=""code"">up/down</span>, or <span class=""code"">ctrl+r</span> and typing in part of the command.'];
Computer_Sci[13] = ['In bash, what command lists all the commands that you\'ve typed? In bash, what command lists all the commands that you\'ve typed?', 
'history'];
Computer_Sci[14] = ['What command executes a previously typed command from history?', 
'<code>!x</code><div>( x being the command number. )</div>'];
Computer_Sci[15] = ['What does incremental history searching allow you to do?', 
'Type part of a previous command and find it.']; 

var JS2_Sivers = [];
JS2_Sivers[0] = ['What does document.write do?', 
'document.write(str) takes a string of text and displays it in the browser, right where the &lt;script&gt; tag is located.'];
JS2_Sivers[1] = ['When people say HTML5, what do they really mean? ', 
'HTML5 markup + JavaScript APIs + CSS(3) = &quot;HTML5&quot;'];
JS2_Sivers[2] = ['internal model of the HTML page is called the ___', 
' internal model of the HTML page is called the DOM'];
JS2_Sivers[3] = ['Variables must start with a ______, __________, or ___________.', 
'Variables must start with a letter, underscore, or dollar sign.'];
JS2_Sivers[4] = ['Why not run JavaScript in the &lt;head&gt;?', 
'Because the DOM hasn\'t been created yet.<br><br />'];
JS2_Sivers[5] = ['How to take JavaScript from the &lt;head&gt; but make it run after the page is loaded?', 
'function init() {<br>&nbsp;&nbsp;// stuff here<br>}<br>window.onload = init;<br><br />'];
JS2_Sivers[6] = ['You have an array arr, but don\'t know the length. Get a random element from it in 2 lines.', 
'randomIndex = Math.floor(Math.random() * arr.length);<br />myValue = arr[randomIndex];<br /><br />'];
JS2_Sivers[7] = ['You define a function with __________. You call a function with _________.<br><br /> ', 
'You define a function with parameters. You call a function with arguments.<br><br />'];

JS2_Sivers[8] = ['Why not declare a variable without the &quot;var&quot; keyword?', 
'Without &quot;var&quot;, all variables are global, even if declared inside a function. But future JavaScript may break this, so avoid it.'];
JS2_Sivers[9] = ['What happens if you call a function before it\'s been defined?', 
' Function declarations can be anywhere in the script. The browser parses all JavaScript before it starts executing.'];
JS2_Sivers[10] = ['If two functions in different files are named the same, what happens?', 
'The one the browser sees last will be the only one used.'];
JS2_Sivers[11] = ['A JavaScript object is like a Ruby ____ or PHP _____', 
'hash or array'];
JS2_Sivers[12] = ['An object\'s &quot;properties&quot; are like a hash or arrays &quot;____&quot;.<br><br /> ', 
'hash or arrays &quot;keys&quot;.<br><br />'];
JS2_Sivers[13] = ['Delete an object\'s property.', 
'delete person.location;'];
JS2_Sivers[14] = ['What object property has the URL of the current page?', 
'window.location'];
JS2_Sivers[15] = ['Any global variables defined are also in the ______ namespace, so you reference them as ______.myvariable', 
'the window namespace, so you reference them as window.myvariable'];

var Vim = [];
Vim[0] = [':q vs. :q! vs. :wq','quits if no changes, quits not saving changes, quits and saves changes'];
Vim[1] = [':n,mw file','Saves lines n through m to file'];
Vim[2] = ['i','insert before the cursor'];
Vim[3] = ['Control-G','Shows filename, current line number, total lines in file, and % of file location'];
Vim[4] = ['I','insert before the line'];
Vim[5] = ['a','append after the cursor'];
Vim[6] = ['A','append after the line'];
Vim[7] = ['o','open a new lne after the current line'];
Vim[8] = ['O','open a new line before the current line'];
Vim[9] = [':r','reads a file and inserts it after the current line'];
Vim[10] = ['w','moves to the next word'];
Vim[11] = ['^','moves to the first non-blank character in the current line'];
Vim[12] = ['$','moves to the end of the line'];
Vim[13] = ['nG or :n','moves to the nth line of the file'];
Vim[14] = ['Ctrl-f','moves forward one full screen'];
Vim[15] = ['Ctrl-b','moves backward one full screen'];
Vim[16] = ['x','deletes one character'];
Vim[17] = ['nx','deletes n characters from current position going right'];
Vim[18] = ['dd or :d','deletes current line'];
Vim[19] = ['yy or :y','yanks (copies) the current line'];
Vim[20] = ['p','pastes(puts)-after the current line what\'s in the yank (copy) buffer'];
Vim[21] = ['P','pastes(puts)-before the current line what\'s in the yank (copy) buffer'];
Vim[22] = ['/','to search forward for a string'];
Vim[23] = ['?','to search backward for a string'];
Vim[24] = [':set ic','sets case insensitive for searches'];
Vim[25] = ['J','joins 2 lines together into one'];
Vim[26] = ['nJ','joins n lines together into one'];
Vim[27] = ['u', 'undo last change'];

var LinuxCommands = [];
LinuxCommands[0] = ['ps -A|grep -i <part of program name>; sudo kill -9 <pid>','stops a stuck process'];
LinuxCommands[1] = ['find .|grep <my filename>','finds a file'];
LinuxCommands[2] = ['ls -lrt','lists a directory in time-revered long listing order'];
LinuxCommands[3] = ['grep -ir <something>','searches case insensitive for something inside all files recursiing directories'];
LinuxCommands[4] = ['df','gets disk usage (percent full, etc.) data'];
LinuxCommands[5] = ['open *.html','opens all files that end with .html'];
LinuxCommands[6] = ['man <cmd>','manual page for a command'];
LinuxCommands[7] = ['more file','displays file one page at a time (via spacebar)'];
LinuxCommands[8] = ['ls -F','lists only file names in the current dir with a / next to sub-directories'];
LinuxCommands[9] = ['mv -r from to','moves a dir system'];
LinuxCommands[10] = ['ls -a','lists only file names in current directory including "hidden" files that begin with a dot'];
LinuxCommands[11] = ['pwd','print working directory'];
LinuxCommands[12] = ['cd','changes directory, default is user\'s home'];
LinuxCommands[13] = ['head','displays first few lines of a file'];
LinuxCommands[14] = ['tail','displays last few lines of a file'];
LinuxCommands[15] = ['wc file','gives number of lines, words and characters in file'];

var N5_Kanji = [];
N5_Kanji[0] = ['雨', '【ウ ・ あめ ・ あま- ・ -さめ】 rain'];
N5_Kanji[1] = ['日','【ニチ ・ ジツ ・ ひ ・ -び ・ -か】 day; sun; Japan; counter for days'];
N5_Kanji[2] = ['一', '【 【イチ ・ イツ ・ ひと- ・ ひと.つ】 one; one radical (no.1)'];
N5_Kanji[3] = ['国', '【【コク ・ くに】 country'];
N5_Kanji[4] = ['人', '【 【ジン ・ ニン ・ ひと ・ -り ・ -と】 person'];
N5_Kanji[5] = ['年', '【 【ネン ・ とし】 year; counter for years'];
N5_Kanji[6] = ['大', '【 【ダイ ・ タイ ・ おお- ・ おお.きい ・ -おお.いに】 large; big'];
N5_Kanji[7] = ['十', '【 【ジュウ ・ ジッ ・ ジュッ ・ とお ・ と】 ten'];
N5_Kanji[8] = ['二', '【 【ニ ・ ジ ・ ふた ・ ふた.つ ・ ふたた.び】 two; two radical (no.2)'];
N5_Kanji[9] = ['本', '【 【ホン ・ もと】 book; present; main; origin; true; real; counter for long cylindrical things'];
N5_Kanji[10] = ['中', '【 【チュウ ・ なか ・ うち ・ あた.る】 in; inside; middle; mean; center'];
N5_Kanji[11] = ['父', '【フ ・ ちち】 father'];
N5_Kanji[12] = ['長', '【 【チョウ ・ なが.い ・ おさ】 long; leader'];
N5_Kanji[13] = ['出', '【 【シュツ ・ スイ ・ で.る ・ -で ・ だ.す ・ -だ.す ・ い.でる ・ い.だす】 exit; leave; go out; come out; put out; protrude'];
N5_Kanji[14] = ['三', '【 【サン ・ ゾウ ・ み ・ み.つ ・ みっ.つ】 three'];
N5_Kanji[15] = ['時', '【 【ジ ・ とき ・ -どき】 time; hour'];
N5_Kanji[16] = ['行', '【 【コウ ・ ギョウ ・ アン ・ い.く ・ ゆ.く ・ -ゆ.き ・ -ゆき ・ -い.き ・ -いき ・ おこな.う ・ おこ.なう】 going; journey'];
N5_Kanji[17] = ['見', '【 【ケン ・ み.る ・ み.える ・ み.せる】 see; hopes; chances; idea; opinion; look at; visible'];
N5_Kanji[18] = ['月', '【 【ゲツ ・ ガツ ・ つき】 month; moon'];
N5_Kanji[19] = ['後', '【ゴ ・ コウ ・ のち ・ うし.ろ ・ うしろ ・ あと ・ おく.れる】 behind; back; later'];
N5_Kanji[20] = ['前', '【【 【ゼン ・ まえ ・ -まえ】 in front; before'];
N5_Kanji[21] = ['生', '【 【セイ ・ ショウ ・ い.きる ・ い.かす ・ い.ける ・ う.まれる ・ うま.れる ・ う.まれ ・ うまれ ・ う.む ・ お.う ・ は.える ・ は.やす ・ き ・ なま ・ なま- ・ な.る ・ な.す ・ む.す ・】 life; genuine; birth'];
N5_Kanji[22] = ['五', '【 【ゴ ・ いつ ・ いつ.つ】 five'];
N5_Kanji[23] = ['間', '【 【カン ・ ケン ・ あいだ ・ ま ・ あい】 interval; space'];
N5_Kanji[24] = ['上', '【 【ジョウ ・ ショウ ・ シャン ・ うえ ・ -うえ ・ うわ- ・ かみ ・ あ.げる ・ -あ.げる ・ あ.がる ・ -あ.がる ・ あ.がり ・ -あ.がり ・ のぼ.る ・ のぼ.り ・ のぼ.せる ・ のぼ.す ・ よ.す】 above; up	'];
N5_Kanji[25] = ['東', '【 【トウ ・ ひがし】 east'];
N5_Kanji[26] = ['四', '【 【シ ・ よ ・ よ.つ ・ よっ.つ ・ よん】 four'];
N5_Kanji[27] = ['今', '【 【コン ・ キン ・ いま】 now'];
N5_Kanji[28] = ['金', '【 【キン ・ コン ・ ゴン ・ かね ・ かな- ・ -がね】 gold'];
N5_Kanji[29] = ['九', '【 【キュウ ・ ク ・ ここの ・ ここの.つ】 nine'];
N5_Kanji[30] = ['入', '【 【ニュウ ・ ジュ ・ い.る ・ -い.る ・ -い.り ・ い.れる ・ -い.れ ・ はい.る】 enter; insert'];
N5_Kanji[31] = ['学', '【 【ガク ・ まな.ぶ】 study; learning; science'];
N5_Kanji[32] = ['高', '【 【コウ ・ たか.い ・ たか ・ -だか ・ たか.まる ・ たか.める】 tall; high; expensive'];
N5_Kanji[33] = ['円', '【 【エン ・ まる.い ・ まる ・ まど ・ まど.か ・ まろ.やか】 circle; yen; round'];
N5_Kanji[34] = ['子', '【 【シ ・ ス ・ ツ ・ こ ・ -こ ・ ね】 child; sign of the rat; 11PM-1AM; first sign of Chinese zodiac'];
N5_Kanji[35] = ['外', '【 【ガイ ・ ゲ ・ そと ・ ほか ・ はず.す ・ はず.れる ・ と-】 outside	'];
N5_Kanji[36] = ['八', '【 【ハチ ・ や ・ や.つ ・ やっ.つ ・ よう】 eight; eight radical (no. 12)'];
N5_Kanji[37] = ['六', '【 【ロク ・ リク ・ む ・ む.つ ・ むっ.つ ・ むい】 six'];
N5_Kanji[38] = ['下', '【 【カ ・ ゲ ・ した ・ しも ・ もと ・ さ.げる ・ さ.がる ・ くだ.る ・ くだ.り ・ くだ.す ・ -くだ.す ・ くだ.さる ・ お.ろす ・ お.りる】 below; down; descend; give; low; inferior'];
N5_Kanji[39] = ['来', '【 【ライ ・ タイ ・ く.る ・ きた.る ・ きた.す ・ き.たす ・ き.たる ・ き ・ こ】 come; due; next; cause; become'];
N5_Kanji[40] = ['気', '【 【キ ・ ケ ・ いき】 spirit; mind; air; atmosphere; mood'];
N5_Kanji[41] = ['小', '【 【ショウ ・ ちい.さい ・ こ- ・ お- ・ さ-】 little; small'];
N5_Kanji[42] = ['七', '【 【シチ ・ なな ・ なな.つ ・ なの】 seven'];
N5_Kanji[43] = ['山', '【 【サン ・ セン ・ やま】 mountain'];
N5_Kanji[44] = ['話', '【 【ワ ・ はな.す ・ はなし】 tale; talk'];
N5_Kanji[45] = ['女', '【 【ジョ ・ ニョ ・ ニョウ ・ おんな ・ め】 woman; female'];
N5_Kanji[46] = ['北', '【 【ホク ・ きた】 north'];
N5_Kanji[47] = ['午', '【 【ゴ ・ うま】 noon; sign of the horse; 11AM-1PM; seventh sign of Chinese zodiac	'];
N5_Kanji[48] = ['百', '【 【ヒャク ・ ビャク ・ もも】 hundred'];
N5_Kanji[49] = ['書', '【 【ショ ・ か.く ・ -が.き ・ -がき】 write	'];
N5_Kanji[50] = ['先', '【 【セン ・ さき ・ ま.ず】 before; ahead; previous; future; precedence	'];
N5_Kanji[51] = ['名', '【【メイ ・ ミョウ ・ な ・ -な】 name; noted; distinguished; reputation'];
N5_Kanji[52] = ['川', '【 【セン ・ かわ】 stream; river; river or 3-stroke river radical (no. 47)	'];
N5_Kanji[53] = ['千', '【 【セン ・ ち】 thousand'];
N5_Kanji[54] = ['水', '【 【スイ ・ みず ・ みず-】 water'];
N5_Kanji[55] = ['半', '【 【ハン ・ なか.ば】 half; middle; odd number; semi-; part-'];
N5_Kanji[56] = ['男', '【 【ダン ・ ナン ・ おとこ ・ お】 male'];
N5_Kanji[57] = ['西', '【 【セイ ・ サイ ・ ス ・ にし】 west; Spain'];
N5_Kanji[58] = ['電', '【 【デン】 electricity'];
N5_Kanji[59] = ['校', '【 【コウ ・ キョウ】 exam; school; printing; proof; correction'];
N5_Kanji[60] = ['語', '【 【ゴ ・ かた.る ・ かた.らう】 word; speech; language'];
N5_Kanji[61] = ['土', '【 【ド ・ ト ・ つち】 soil; earth; ground; Turkey'];
N5_Kanji[62] = ['木', '【 【ボク ・ モク ・ き ・ こ-】 tree; wood'];
N5_Kanji[63] = ['聞', '【 【ブン ・ モン ・ き.く ・ き.こえる】 hear; ask; listen'];
N5_Kanji[64] = ['食', '【ショク ・ ジキ ・ く.う ・ く.らう ・ た.べる ・ は.む】 eat; food'];
N5_Kanji[65] = ['車', '【シャ ・ くるま】 car'];
N5_Kanji[66] = ['何', '【カ ・ なに ・ なん ・ なに- ・ なん-】 what'];
N5_Kanji[67] = ['南', '【ナン ・ ナ ・ みなみ】 south'];
N5_Kanji[68] = ['万', '【マン ・ バン ・ よろず】 ten thousand; 10,000'];
N5_Kanji[69] = ['毎', '【マイ ・ ごと ・ -ごと.に】 every'];
N5_Kanji[70] = ['白', '【ハク ・ ビャク ・ しろ ・ しら- ・ しろ.い】 white'];
N5_Kanji[71] = ['天', '【テン ・ あまつ ・ あめ ・ あま-】 heavens; sky; imperial'];
N5_Kanji[72] = ['母', '【ボ ・ はは ・ も】 mother	'];
N5_Kanji[73] = ['火', '【カ ・ ひ ・ -び ・ ほ-】 fire'];
N5_Kanji[74] = ['右', '【ウ ・ ユウ ・ みぎ】 right'];
N5_Kanji[75] = ['読', '【ドク ・ トク ・ トウ ・ よ.む ・ -よ.み】 read'];
N5_Kanji[76] = ['友', '【ユウ ・ とも】 friend	'];
N5_Kanji[77] = ['左', '【サ ・ シャ ・ ひだり】 left'];
N5_Kanji[78] = ['休', '【キュウ ・ やす.む ・ やす.まる ・ やす.める】 rest; day off; retire; sleep'];




