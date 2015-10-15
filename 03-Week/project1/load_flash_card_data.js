
//
// Keep min deck length = (the max number of cards in game * 2) + 3 so as to have enough cards
// (e.g.: for max num cards = 2, min deck length must be 7;
//        for max num cards = 4, min deck length must be 11;
//                            6                          15
//        for max num cards = 10, min deck len must be 23;
//        for max num cards = 20, mun deck len must be 43; ...
//


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
Javascript1_cards[16] = ['parseFloat()','Parses a string argument and returns a floating point number.'];
Javascript1_cards[17] = ['decodeURI()','ecodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.'];
Javascript1_cards[18] = ['Object.prototype','Allows the addition of properties to all objects of type Object.'];
Javascript1_cards[19] = ['Object.freeze()','Freezes an object: other code can\'t delete or change any properties.'];

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
Computer_Sci[16] = ['BASH is an acronym for ','Bourne Again Shell'];
Computer_Sci[17] = ['What command is useful for when you know what you want to do, but don\'t know the name of the tool required?','apropos'];
Computer_Sci[18] = ['Domain name servers (DNSs) tell your computer the?','IP address associated with a domain name.'];
Computer_Sci[19] = ['What verb means to create a new object of a class? ','Instantiate.'];
Computer_Sci[20] = ['Bitwise ^ (e.g. a ^ b)','binary xor only true if one or the other bit is set (not both, not neither)'];

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
JS2_Sivers[16] = ['JavaScript is made up of what 3 distinct parts?',
' 1. ECMAScript - provides the core functionality<br>2. DOM - Document Object Model - methods+interfaces for working with the content of a web page<br>3. BOM - Browser Object Model - methods+interfaces for interacting with the browser'];
JS2_Sivers[17] = ['HTML5 helped codify much of the ___________ as a formal spec. HTML5 helped dissipate a lot of ______ confusion. Support for cookies comes from the ______.',
'BOM (Browser Object Model)'];
JS2_Sivers[18] = ['What does JavaScript do with any number that is too big or small to represent?',
'Infinity or -Infinity'];
JS2_Sivers[19] = ['var x = y || z;&nbsp;&nbsp;// what does this do? why use it?',
'If y is not null or false, it uses y and never evaluates z.<br>If y is null or false, it uses z.<br>This is used often for variable assignment.'];

var Vim = [];
Vim[0] = [':q vs. :q! vs. :wq','quits if no changes, quits not saving changes, quits and saves changes'];
Vim[1] = [':n,mw file','Saves lines n through m to file'];
Vim[2] = ['i','insert before the cursor'];
Vim[3] = ['Control-G','Shows filename, current line number, total lines in file, and % of file location'];
Vim[4] = ['I','insert before the line'];
Vim[5] = ['a','append (insert mode) after the cursor'];
Vim[6] = ['A','append (insert mode) after the line'];
Vim[7] = ['o','open a new line after the current line in insert mode'];
Vim[8] = ['O','open a new line before the current line in insert mode'];
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
Vim[28] = ['(esc key)', 'exits insert mode'];

var LinuxCommands = [];
LinuxCommands[0] = ['ps -A|grep -i <part of program name>; sudo kill -9 <pid>','stops a stuck process'];
LinuxCommands[1] = ['find .|grep my_filename','finds a file'];
LinuxCommands[2] = ['ls -lrt','lists a directory in time-revered long listing order'];
LinuxCommands[3] = ['grep -ir something','searches case insensitive for something inside all files recursiing directories'];
LinuxCommands[4] = ['df','gets disk usage (percent full, etc.) data'];
LinuxCommands[5] = ['open *.html','opens all files that end with .html'];
LinuxCommands[6] = ['man cmd','manual page for a command'];
LinuxCommands[7] = ['more file','displays file one page at a time (via spacebar)'];
LinuxCommands[8] = ['ls -F','lists only file names in the current dir with a / next to sub-directories'];
LinuxCommands[9] = ['mv -r from to','moves a dir system'];
LinuxCommands[10] = ['ls -a','lists only file names in current directory including "hidden" files that begin with a dot'];
LinuxCommands[11] = ['pwd','print working directory'];
LinuxCommands[12] = ['cd','changes directory, default is user\'s home'];
LinuxCommands[13] = ['head','displays first few lines of a file'];
LinuxCommands[14] = ['tail','displays last few lines of a file'];
LinuxCommands[15] = ['wc file','gives number of lines, words and characters in file'];
LinuxCommands[16] = ['cat filename','prints (outputs to screen) filename'];
LinuxCommands[17] = ['grep sea_str filename2 > filename','puts result of grep into filename'];
LinuxCommands[18] = ['history','outputs last 500 commands that were typed'];
LinuxCommands[19] = ['cmd1 | cmd 2','pipes cmd1 output as imput into cmd2'];

var N5_Kanji = [];
N5_Kanji[0] = ['雨', '【ウ ・ あめ ・ あま- ・ -さめ】 rain'];
N5_Kanji[1] = ['日', '【ニチ ・ ジツ ・ ひ ・ -び ・ -か】 day; sun; Japan; counter for days'];
N5_Kanji[2] = ['一', '【イチ ・ イツ ・ ひと- ・ ひと.つ】 one; one radical (no.1)'];
N5_Kanji[3] = ['国', '【コク ・ くに】 country'];
N5_Kanji[4] = ['人', '【ジン ・ ニン ・ ひと ・ -り ・ -と】 person'];
N5_Kanji[5] = ['年', '【ネン ・ とし】 year; counter for years'];
N5_Kanji[6] = ['大', '【ダイ ・ タイ ・ おお- ・ おお.きい ・ -おお.いに】 large; big'];
N5_Kanji[7] = ['十', '【ジュウ ・ ジッ ・ ジュッ ・ とお ・ と】 ten'];
N5_Kanji[8] = ['二', '【ニ ・ ジ ・ ふた ・ ふた.つ ・ ふたた.び】 two; two radical (no.2)'];
N5_Kanji[9] = ['本', '【ホン ・ もと】 book; present; main; origin; true; real; counter for long cylindrical things'];
N5_Kanji[10] = ['中', '【チュウ ・ なか ・ うち ・ あた.る】 in; inside; middle; mean; center'];
N5_Kanji[11] = ['父', '【フ ・ ちち】 father'];
N5_Kanji[12] = ['長', '【チョウ ・ なが.い ・ おさ】 long; leader'];
N5_Kanji[13] = ['出', '【シュツ ・ スイ ・ で.る ・ -で ・ だ.す ・ -だ.す ・ い.でる ・ い.だす】 exit; leave; go out; come out; put out; protrude'];
N5_Kanji[14] = ['三', '【サン ・ ゾウ ・ み ・ み.つ ・ みっ.つ】 three'];
N5_Kanji[15] = ['時', '【ジ ・ とき ・ -どき】 time; hour'];
N5_Kanji[16] = ['行', '【コウ ・ ギョウ ・ アン ・ い.く ・ ゆ.く ・ -ゆ.き ・ -ゆき ・ -い.き ・ -いき ・ おこな.う ・ おこ.なう】 going; journey'];
N5_Kanji[17] = ['見', '【ケン ・ み.る ・ み.える ・ み.せる】 see; hopes; chances; idea; opinion; look at; visible'];
N5_Kanji[18] = ['月', '【ゲツ ・ ガツ ・ つき】 month; moon'];
N5_Kanji[19] = ['後', '【ゴ ・ コウ ・ のち ・ うし.ろ ・ うしろ ・ あと ・ おく.れる】 behind; back; later'];
N5_Kanji[20] = ['前', '【ゼン ・ まえ ・ -まえ】 in front; before'];
N5_Kanji[21] = ['生', '【セイ ・ ショウ ・ い.きる ・ い.かす ・ い.ける ・ う.まれる ・ うま.れる ・ う.まれ ・ うまれ ・ う.む ・ お.う ・ は.える ・ は.やす ・ き ・ なま ・ なま- ・ な.る ・ な.す ・ む.す ・】 life; genuine; birth'];
N5_Kanji[22] = ['五', '【ゴ ・ いつ ・ いつ.つ】 five'];
N5_Kanji[23] = ['間', '【カン ・ ケン ・ あいだ ・ ま ・ あい】 interval; space'];
N5_Kanji[24] = ['上', '【ジョウ ・ ショウ ・ シャン ・ うえ ・ -うえ ・ うわ- ・ かみ ・ あ.げる ・ -あ.げる ・ あ.がる ・ -あ.がる ・ あ.がり ・ -あ.がり ・ のぼ.る ・ のぼ.り ・ のぼ.せる ・ のぼ.す ・ よ.す】 above; up	'];
N5_Kanji[25] = ['東', '【トウ ・ ひがし】 east'];
N5_Kanji[26] = ['四', '【シ ・ よ ・ よ.つ ・ よっ.つ ・ よん】 four'];
N5_Kanji[27] = ['今', '【コン ・ キン ・ いま】 now'];
N5_Kanji[28] = ['金', '【キン ・ コン ・ ゴン ・ かね ・ かな- ・ -がね】 gold'];
N5_Kanji[29] = ['九', '【キュウ ・ ク ・ ここの ・ ここの.つ】 nine'];
N5_Kanji[30] = ['入', '【ニュウ ・ ジュ ・ い.る ・ -い.る ・ -い.り ・ い.れる ・ -い.れ ・ はい.る】 enter; insert'];
N5_Kanji[31] = ['学', '【ガク ・ まな.ぶ】 study; learning; science'];
N5_Kanji[32] = ['高', '【コウ ・ たか.い ・ たか ・ -だか ・ たか.まる ・ たか.める】 tall; high; expensive'];
N5_Kanji[33] = ['円', '【エン ・ まる.い ・ まる ・ まど ・ まど.か ・ まろ.やか】 circle; yen; round'];
N5_Kanji[34] = ['子', '【シ ・ ス ・ ツ ・ こ ・ -こ ・ ね】 child; sign of the rat; 11PM-1AM; first sign of Chinese zodiac'];
N5_Kanji[35] = ['外', '【ガイ ・ ゲ ・ そと ・ ほか ・ はず.す ・ はず.れる ・ と-】 outside	'];
N5_Kanji[36] = ['八', '【ハチ ・ や ・ や.つ ・ やっ.つ ・ よう】 eight; eight radical (no. 12)'];
N5_Kanji[37] = ['六', '【ロク ・ リク ・ む ・ む.つ ・ むっ.つ ・ むい】 six'];
N5_Kanji[38] = ['下', '【カ ・ ゲ ・ した ・ しも ・ もと ・ さ.げる ・ さ.がる ・ くだ.る ・ くだ.り ・ くだ.す ・ -くだ.す ・ くだ.さる ・ お.ろす ・ お.りる】 below; down; descend; give; low; inferior'];
N5_Kanji[39] = ['来', '【ライ ・ タイ ・ く.る ・ きた.る ・ きた.す ・ き.たす ・ き.たる ・ き ・ こ】 come; due; next; cause; become'];
N5_Kanji[40] = ['気', '【キ ・ ケ ・ いき】 spirit; mind; air; atmosphere; mood'];
N5_Kanji[41] = ['小', '【ショウ ・ ちい.さい ・ こ- ・ お- ・ さ-】 little; small'];
N5_Kanji[42] = ['七', '【シチ ・ なな ・ なな.つ ・ なの】 seven'];
N5_Kanji[43] = ['山', '【サン ・ セン ・ やま】 mountain'];
N5_Kanji[44] = ['話', '【ワ ・ はな.す ・ はなし】 tale; talk'];
N5_Kanji[45] = ['女', '【ジョ ・ ニョ ・ ニョウ ・ おんな ・ め】 woman; female'];
N5_Kanji[46] = ['北', '【ホク ・ きた】 north'];
N5_Kanji[47] = ['午', '【ゴ ・ うま】 noon; sign of the horse; 11AM-1PM; seventh sign of Chinese zodiac	'];
N5_Kanji[48] = ['百', '【ヒャク ・ ビャク ・ もも】 hundred'];
N5_Kanji[49] = ['書', '【ショ ・ か.く ・ -が.き ・ -がき】 write	'];
N5_Kanji[50] = ['先', '【セン ・ さき ・ ま.ず】 before; ahead; previous; future; precedence	'];
N5_Kanji[51] = ['名', '【メイ ・ ミョウ ・ な ・ -な】 name; noted; distinguished; reputation'];
N5_Kanji[52] = ['川', '【セン ・ かわ】 stream; river; river or 3-stroke river radical (no. 47)	'];
N5_Kanji[53] = ['千', '【セン ・ ち】 thousand'];
N5_Kanji[54] = ['水', '【スイ ・ みず ・ みず-】 water'];
N5_Kanji[55] = ['半', '【ハン ・ なか.ば】 half; middle; odd number; semi-; part-'];
N5_Kanji[56] = ['男', '【ダン ・ ナン ・ おとこ ・ お】 male'];
N5_Kanji[57] = ['西', '【セイ ・ サイ ・ ス ・ にし】 west; Spain'];
N5_Kanji[58] = ['電', '【デン】 electricity'];
N5_Kanji[59] = ['校', '【コウ ・ キョウ】 exam; school; printing; proof; correction'];
N5_Kanji[60] = ['語', '【ゴ ・ かた.る ・ かた.らう】 word; speech; language'];
N5_Kanji[61] = ['土', '【ド ・ ト ・ つち】 soil; earth; ground; Turkey'];
N5_Kanji[62] = ['木', '【ボク ・ モク ・ き ・ こ-】 tree; wood'];
N5_Kanji[63] = ['聞', '【ブン ・ モン ・ き.く ・ き.こえる】 hear; ask; listen'];
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


var N4_Kanji = [];
N4_Kanji[0] = ['会','【カイ ・ エ ・ あ.う ・ あ.わせる ・ あつ.まる】 meeting; meet; party; association; interview; join'];
N4_Kanji[1] = ['同 ', '【ドウ ・ おな.じ】 same; agree; equal'];
N4_Kanji[2] = ['事 ', '【ジ ・ ズ ・ こと ・ つか.う ・ つか.える】 matter; thing; fact; business; reason; possibly'];
N4_Kanji[3] = ['自 ', '【ジ ・ シ ・ みずか.ら ・ おの.ずから ・ おの.ずと】 oneself'];
N4_Kanji[4] = ['社 ', '【シャ ・ やしろ】 company; firm; office; association; shrine'];
N4_Kanji[5] = ['発 ', '【ハツ ・ ホツ ・ た.つ ・ あば.く ・ おこ.る ・ つか.わす ・ はな.つ】 departure; discharge; publish; emit; start from; disclose; counter for gunshots'];
N4_Kanji[6] = ['者 ', '【シャ ・ もの】 someone; person'];
N4_Kanji[7] = ['地 ', '【チ ・ ジ】 ground; earth'];
N4_Kanji[8] = ['業 ', '【ギョウ ・ ゴウ ・ わざ】 business; vocation; arts; performance	'];
N4_Kanji[9] = ['方 ', '【ホウ ・ かた ・ -かた ・ -がた】 direction; person; alternative'];
N4_Kanji[10] = ['新 ', '【シン ・ あたら.しい ・ あら.た ・ あら- ・ にい-】 new'];
N4_Kanji[11] = ['場 ', '【ジョウ ・ チョウ ・ ば】 location; place'];
N4_Kanji[12] = ['員 ', '【イン】 employee; member; number; the one in charge'];
N4_Kanji[13] = ['立', ' 【リツ ・ リュウ ・ リットル ・ た.つ ・ -た.つ ・ た.ち- ・ た.てる ・ -た.てる ・ た.て- ・ たて- ・ -た.て ・ -だ.て ・ -だ.てる】 stand up; rise; set up; erect'];
N4_Kanji[14] = ['開 ', '【カイ ・ ひら.く ・ ひら.き ・ -びら.き ・ ひら.ける ・ あ.く ・ あ.ける】 open; unfold; unseal	'];
N4_Kanji[15] = ['手 ', '【シュ ・ ズ ・ て ・ て- ・ -て ・ た-】 hand'];
N4_Kanji[16] = ['力 ', '【リョク ・ リキ ・ リイ ・ ちから】 power; strength; strong; strain; bear up; exert	'];
N4_Kanji[17] = ['問 ', '【モン ・ と.う ・ と.い ・ とん】 question; ask; problem'];
N4_Kanji[18] = ['代 ', '【ダイ ・ タイ ・ か.わる ・ かわ.る ・ かわ.り ・ か.わり ・ -がわ.り ・ -が.わり ・ か.える ・ よ ・ しろ】 substitute; change; convert; replace; period; age; counter for decades of ages, eras, etc.; generation; charge; rate; fee'];
N4_Kanji[19] = ['明 ', '【メイ ・ ミョウ ・ ミン ・ あ.かり ・ あか.るい ・ あか.るむ ・ あか.らむ ・ あき.らか ・ あ.ける ・ -あ.け ・ あ.く ・ あ.くる ・ あ.かす】 bright; light	'];
N4_Kanji[20] = ['動 ', '【ドウ ・ うご.く ・ うご.かす】 move; motion; change; confusion; shift; shake'];
N4_Kanji[21] = ['京 ', '【キョウ ・ ケイ ・ キン ・ みやこ】 capital; 10**16	'];
N4_Kanji[22] = ['目 ', '【モク ・ ボク ・ め ・ -め ・ ま-】 eye; class; look; insight; experience; care; favor	'];
N4_Kanji[23] = ['通 ', '【ツウ ・ ツ ・ とお.る ・ とお.り ・ -とお.り ・ -どお.り ・ とお.す ・ とお.し ・ -どお.し ・ かよ.う】 traffic; pass through; avenue; commute; counter for letters, notes, documents, etc.'];
N4_Kanji[24] = ['言 ', '【ゲン ・ ゴン ・ い.う ・ こと】 say'];
N4_Kanji[25] = ['理 ', '【リ ・ ことわり】 logic; arrangement; reason; justice; truth'];
N4_Kanji[26] = ['体 ', '【タイ ・ テイ ・ からだ ・ かたち】 body; substance; object; reality; counter for images'];
N4_Kanji[27] = ['田 ', '【デン ・ た】 rice field; rice paddy'];
N4_Kanji[28] = ['主 ', '【シュ ・ ス ・ シュウ ・ ぬし ・ おも ・ あるじ】 lord; chief; master; main thing; principal'];
N4_Kanji[29] = ['題 ', '【ダイ】 topic; subject'];
N4_Kanji[30] = ['意 ', '【イ】 idea; mind; heart; taste; thought; desire; care; liking'];
N4_Kanji[31] = ['不 ', '【フ ・ ブ】 negative; non-; bad; ugly; clumsy'];
N4_Kanji[32] = ['作 ', '【サク ・ サ ・ つく.る ・ つく.り ・ -づく.り】 make; production; prepare; build	'];
N4_Kanji[33] = ['用 ', '【ヨウ ・ もち.いる】 utilize; business; service; use; employ'];
N4_Kanji[34] = ['度 ', '【ド ・ ト ・ タク ・ たび ・ -た.い】 degrees; occurrence; time; counter for occurrences'];
N4_Kanji[35] = ['強 ', '【キョウ ・ ゴウ ・ つよ.い ・ つよ.まる ・ つよ.める ・ し.いる ・ こわ.い】 strong'];
N4_Kanji[36] = ['公 ', '【コウ ・ ク ・ おおやけ】 public; prince; official; governmental'];
N4_Kanji[37] = ['持 ', '【ジ ・ も.つ ・ -も.ち ・ も.てる】 hold; have'];
N4_Kanji[38] = ['野 ', '【ヤ ・ ショ ・ の ・ の-】 plains; field; rustic; civilian life'];
N4_Kanji[39] = ['以 ', '【イ ・ もっ.て】 by means of; because; in view of; compared with'];
N4_Kanji[40] = ['思 ', '【シ ・ おも.う ・ おもえら.く ・ おぼ.す】 think	'];
N4_Kanji[41] = ['家 ', '【カ ・ ケ ・ いえ ・ や ・ うち】 house; home; family; professional; expert; performer'];
N4_Kanji[42] = ['世 ', '【セイ ・ セ ・ ソウ ・ よ ・ さんじゅう】 generation; world; society; public	'];
N4_Kanji[43] = ['多 ', '【タ ・ おお.い ・ まさ.に ・ まさ.る】 many; frequent; much'];
N4_Kanji[44] = ['正 ', '【セイ ・ ショウ ・ ただ.しい ・ ただ.す ・ まさ ・ まさ.に】 correct; justice; righteous'];
N4_Kanji[45] = ['安 ', '【アン ・ やす.い ・ やす.まる ・ やす ・ やす.らか】 relax; cheap; low; quiet; rested; contented; peaceful'];
N4_Kanji[46] = ['院 ', '【イン】 Inst.; institution; temple; mansion; school'];
N4_Kanji[47] = ['心 ', '【シン ・ こころ ・ -ごころ】 heart; mind; spirit; heart radical (no. 61)'];
N4_Kanji[48] = ['界 ', '【カイ】 world'];
N4_Kanji[49] = ['教 ', '【キョウ ・ おし.える ・ おそ.わる】 teach; faith; doctrine'];
N4_Kanji[50] = ['文 ', '【ブン ・ モン ・ ふみ ・ あや】 sentence; literature; style; art; decoration; figures; plan; literary radical (no. 67)'];
N4_Kanji[51] = ['元 ', '【ゲン ・ ガン ・ もと】 beginning; former time; origin	'];
N4_Kanji[52] = ['重 ', '【ジュウ ・ チョウ ・ え ・ おも.い ・ おも.り ・ おも.なう ・ かさ.ねる ・ かさ.なる ・ おも】 heavy; heap up; pile up; nest of boxes; -fold'];
N4_Kanji[53] = ['近 ', '【キン ・ コン ・ ちか.い】 near; early; akin; tantamount'];
N4_Kanji[54] = ['考 ', '【コウ ・ かんが.える ・ かんが.え】 consider; think over'];
N4_Kanji[55] = ['画 ', '【ガ ・ カク ・ エ ・ カイ ・ えが.く ・ かく.する ・ かぎ.る ・ はかりごと ・ はか.る】 brush-stroke; picture'];
N4_Kanji[56] = ['海 ', '【カイ ・ うみ】 sea; ocean'];
N4_Kanji[57] = ['売 ', '【バイ ・ う.る ・ う.れる】 sell'];
N4_Kanji[58] = ['知 ', '【チ ・ し.る ・ し.らせる】 know; wisdom'];
N4_Kanji[59] = ['道 ', '【ドウ ・ トウ ・ みち】 road-way; street; district; journey; course; moral; teachings'];
N4_Kanji[60] = ['集 ', '【シュウ ・ あつ.まる ・ あつ.める ・ つど.う】 gather; meet; congregate; swarm; flock'];
N4_Kanji[61] = ['別 ', '【ベツ ・ わか.れる ・ わ.ける】 separate; branch off; diverge; fork; another; extra; specially'];
N4_Kanji[62] = ['物 ', '【ブツ ・ モツ ・ もの ・ もの-】 thing; object; matter'];
N4_Kanji[63] = ['使 ', '【シ ・ つか.う ・ つか.い ・ -つか.い ・ -づか.い】 use; send on a mission; order; messenger; envoy; ambassador; cause'];
N4_Kanji[64] = ['品 ', '【ヒン ・ ホン ・ しな】 goods; refinement; dignity; article; counter for meal courses'];
N4_Kanji[65] = ['計 ', '【ケイ ・ はか.る ・ はか.らう】 plot; plan; scheme; measure'];
N4_Kanji[66] = ['死 ', '【シ ・ し.ぬ ・ し.に-】 death; die'];
N4_Kanji[67] = ['特 ', '【トク】 special'];
N4_Kanji[68] = ['私 ', '【シ ・ わたくし ・ わたし】 private; I; me'];
N4_Kanji[69] = ['始 ', '【シ ・ はじ.める ・ -はじ.める ・ はじ.まる】 commence; begin'];
N4_Kanji[70] = ['朝 ', '【チョウ ・ あさ】 morning; dynasty; regime; epoch; period; (North) Korea'];
N4_Kanji[71] = ['運 ', '【ウン ・ はこ.ぶ】 carry; luck; destiny; fate; lot; transport; progress; advance'];
N4_Kanji[72] = ['終 ', '【シュウ ・ お.わる ・ -お.わる ・ おわ.る ・ お.える ・ つい ・ つい.に】 end; finish'];
N4_Kanji[73] = ['台 ', '【ダイ ・ タイ ・ うてな ・ われ ・ つかさ】 pedestal; a stand; counter for machines and vehicles	'];
N4_Kanji[74] = ['広 ', '【コウ ・ ひろ.い ・ ひろ.まる ・ ひろ.める ・ ひろ.がる ・ ひろ.げる】 wide; broad; spacious'];
N4_Kanji[75] = ['住 ', '【ジュウ ・ ヂュウ ・ チュウ ・ す.む ・ す.まう ・ -ず.まい】 dwell; reside; live; inhabit	'];
N4_Kanji[76] = ['真 ', '【シン ・ ま ・ ま- ・ まこと】 true; reality; Buddhist sect'];
N4_Kanji[77] = ['有 ', '【ユウ ・ ウ ・ あ.る】 possess; have; exist; happen; occur; approx'];
N4_Kanji[78] = ['口 ', '【コウ ・ ク ・ くち】 mouth'];
N4_Kanji[79] = ['少 ', '【ショウ ・ すく.ない ・ すこ.し】 few; little'];
N4_Kanji[80] = ['町 ', '【チョウ ・ まち】 town; village; block; street'];
N4_Kanji[81] = ['料 ', '【リョウ】 fee; materials	'];
N4_Kanji[82] = ['工 ', '【コウ ・ ク ・ グ】 craft; construction; katakana e radical (no. 48)'];
N4_Kanji[83] = ['建 ', '【ケン ・ コン ・ た.てる ・ た.て ・ -だ.て ・ た.つ】 build	'];
N4_Kanji[84] = ['空 ', '【クウ ・ そら ・ あ.く ・ あ.き ・ あ.ける ・ から ・ す.く ・ す.かす ・ むな.しい】 empty; sky; void; vacant; vacuum'];
N4_Kanji[85] = ['急 ', '【キュウ ・ いそ.ぐ ・ いそ.ぎ】 hurry; emergency; sudden; steep'];
N4_Kanji[86] = ['止 ', '【シ ・ と.まる ・ -ど.まり ・ と.める ・ -と.める ・ -ど.め ・ とど.める ・ とど.め ・ とど.まる ・ や.める ・ や.む ・ -や.む ・ よ.す ・ -さ.す ・ -さ.し】 stop; halt'];
N4_Kanji[87] = ['送 ', '【ソウ ・ おく.る】 escort; send'];
N4_Kanji[88] = ['切 ', '【セツ ・ サイ ・ き.る ・ -き.る ・ き.り ・ -き.り ・ -ぎ.り ・ き.れる ・ -き.れる ・ き.れ ・ -き.れ ・ -ぎ.れ】 cut; cutoff; be sharp'];
N4_Kanji[89] = ['転 ', '【テン ・ ころ.がる ・ ころ.げる ・ ころ.がす ・ ころ.ぶ ・ まろ.ぶ ・ うたた ・ うつ.る ・ くる.めく】 revolve; turn around; change'];
N4_Kanji[90] = ['研 ', '【ケン ・ と.ぐ】 polish; study of; sharpen'];
N4_Kanji[91] = ['足 ', '【ソク ・ あし ・ た.りる ・ た.る ・ た.す】 leg; foot; be sufficient; counter for pairs of footwear	'];
N4_Kanji[92] = ['究 ', '【キュウ ・ ク ・ きわ.める】 research; study'];
N4_Kanji[93] = ['楽 ', '【ガク ・ ラク ・ ゴウ ・ たの.しい ・ たの.しむ ・ この.む】 music; comfort; ease'];
N4_Kanji[94] = ['起 ', '【キ ・ お.きる ・ お.こる ・ お.こす ・ おこ.す ・ た.つ】 rouse; wake up; get up	'];
N4_Kanji[95] = ['着 ', '【チャク ・ ジャク ・ き.る ・ -ぎ ・ き.せる ・ -き.せ ・ つ.く ・ つ.ける】 don; arrive; wear; counter for suits of clothing'];
N4_Kanji[96] = ['店 ', '【テン ・ みせ ・ たな】 store; shop'];
N4_Kanji[97] = ['病 ', '【ビョウ ・ ヘイ ・ や.む ・ -や.み ・ やまい】 ill; sick	'];
N4_Kanji[98] = ['質 ', '【シツ ・ シチ ・ チ ・ たち ・ ただ.す ・ もと ・ わりふ】 substance; quality; matter; temperament'];
N4_Kanji[99] = ['待 ', '【タイ ・ ま.つ ・ -ま.ち】 wait; depend on	'];
N4_Kanji[100] = ['試 ', '【シ ・ こころ.みる ・ ため.す】 test; try; attempt; experiment; ordeal'];
N4_Kanji[101] = ['族 ', '【ゾク】 tribe; family'];
N4_Kanji[102] = ['銀 ', '【ギン ・ しろがね】 silver'];
N4_Kanji[103] = ['早 ', '【ソウ ・ サッ ・ はや.い ・ はや ・ はや- ・ はや.まる ・ はや.める ・ さ-】 early; fast'];
N4_Kanji[104] = ['映 ', '【エイ ・ うつ.る ・ うつ.す ・ は.える ・ -ば.え】 reflect; reflection; projection'];
N4_Kanji[105] = ['親 ', '【シン ・ おや ・ おや- ・ した.しい ・ した.しむ】 parent; intimacy; relative; familiarity; dealer (cards)'];
N4_Kanji[106] = ['験 ', '【ケン ・ ゲン ・ あかし ・ しるし ・ ため.す ・ ためし】 verification; effect; testing'];
N4_Kanji[107] = ['英 ', '【エイ ・ はなぶさ】 England; English'];
N4_Kanji[108] = ['医 ', '【イ ・ い.やす ・ い.する ・ くすし】 doctor; medicine	'];
N4_Kanji[109] = ['仕 ', '【シ ・ ジ ・ つか.える】 attend; doing; official; serve'];
N4_Kanji[110] = ['去 ', '【キョ ・ コ ・ さ.る ・ -さ.る】 gone; past; quit; leave; elapse; eliminate; divorce'];
N4_Kanji[111] = ['味 ', '【ミ ・ あじ ・ あじ.わう】 flavor; taste'];
N4_Kanji[112] = ['写 ', '【シャ ・ ジャ ・ うつ.す ・ うつ.る ・ うつ- ・ うつ.し】 copy; be photographed; describe'];
N4_Kanji[113] = ['字 ', '【ジ ・ あざ ・ あざな ・ -な】 character; letter; word; section of village'];
N4_Kanji[114] = ['答 ', '【トウ ・ こた.える ・ こた.え】 solution; answer'];
N4_Kanji[115] = ['夜 ', '【ヤ ・ よ ・ よる】 night; evening'];
N4_Kanji[116] = ['音 ', '【オン ・ イン ・ -ノン ・ おと ・ ね】 sound; noise'];
N4_Kanji[117] = ['注 ', '【チュウ ・ そそ.ぐ ・ さ.す ・ つ.ぐ】 pour; irrigate; shed (tears); flow into; concentrate on; notes; comment; annotate'];
N4_Kanji[118] = ['帰 ', '【キ ・ かえ.る ・ かえ.す ・ おく.る ・ とつ.ぐ】 homecoming; arrive at; lead to; result in'];
N4_Kanji[119] = ['古 ', '【コ ・ ふる.い ・ ふる- ・ -ふる.す】 old'];
N4_Kanji[120] = ['歌 ', '【カ ・ うた ・ うた.う】 song; sing'];
N4_Kanji[121] = ['買 ', '【バイ ・ か.う】 buy	'];
N4_Kanji[122] = ['悪 ', '【アク ・ オ ・ わる.い ・ わる- ・ あ.し ・ にく.い ・ -にく.い ・ ああ ・ いずくに ・ いずくんぞ ・ にく.む】 bad; vice; rascal; false; evil; wrong'];
N4_Kanji[123] = ['図 ', '【ズ ・ ト ・ え ・ はか.る】 map; drawing; plan; unexpected; accidentally	'];
N4_Kanji[124] = ['週 ', '【シュウ】 week	'];
N4_Kanji[125] = ['室 ', '【シツ ・ むろ】 room; apartment; chamber; greenhouse; cellar	'];
N4_Kanji[126] = ['歩 ', '【ホ ・ ブ ・ フ ・ ある.く ・ あゆ.む】 walk; counter for steps'];
N4_Kanji[127] = ['風 ', '【フウ ・ フ ・ かぜ ・ かざ- ・ -かぜ】 wind; air; style; manner'];
N4_Kanji[128] = ['紙 ', '【シ ・ かみ】 paper'];
N4_Kanji[129] = ['黒 ', '【コク ・ くろ ・ くろ.ずむ ・ くろ.い】 black'];
N4_Kanji[130] = ['花 ', '【カ ・ ケ ・ はな】 flower'];
N4_Kanji[131] = ['春 ', '【シュン ・ はる】 springtime; spring (season)'];
N4_Kanji[132] = ['赤 ', '【セキ ・ シャク ・ あか ・ あか- ・ あか.い ・ あか.らむ ・ あか.らめる】 red'];
N4_Kanji[133] = ['青 ', '【セイ ・ ショウ ・ あお ・ あお- ・ あお.い】 blue; green'];
N4_Kanji[134] = ['館 ', '【カン ・ やかた ・ たて】 building; mansion; large building; palace'];
N4_Kanji[135] = ['屋 ', '【オク ・ や】 roof; house; shop; dealer; seller'];
N4_Kanji[136] = ['色 ', '【ショク ・ シキ ・ いろ】 color'];
N4_Kanji[137] = ['走 ', '【ソウ ・ はし.る】 run'];
N4_Kanji[138] = ['秋 ', '【シュウ ・ あき ・ とき】 autumn'];
N4_Kanji[139] = ['夏 ', '【カ ・ ガ ・ ゲ ・ なつ】 summer'];
N4_Kanji[140] = ['習 ', '【シュウ ・ ジュ ・ なら.う ・ なら.い】 learn'];
N4_Kanji[141] = ['駅 ', '【エキ】 station	'];
N4_Kanji[142] = ['洋 ', '【ヨウ】 ocean; western style'];
N4_Kanji[143] = ['旅 ', '【リョ ・ たび】 trip; travel	'];
N4_Kanji[144] = ['服 ', '【フク】 clothing; admit; obey; discharge'];
N4_Kanji[145] = ['夕 ', '【セキ ・ ゆう】 evening'];
N4_Kanji[146] = ['借 ', '【シャク ・ か.りる】 borrow; rent'];
N4_Kanji[147] = ['曜 ', '【ヨウ】 weekday	'];
N4_Kanji[148] = ['飲 ', '【イン ・ オン ・ の.む ・ -の.み】 drink; smoke; take'];
N4_Kanji[149] = ['肉 ', '【ニク ・ しし】 meat	'];
N4_Kanji[150] = ['貸 ', '【タイ ・ か.す ・ か.し- ・ かし-】 lend'];
N4_Kanji[151] = ['堂 ', '【ドウ】 public chamber; hall'];
N4_Kanji[152] = ['鳥 ', '【チョウ ・ とり】 bird; chicken'];
N4_Kanji[153] = ['飯 ', '【ハン ・ めし】 meal; boiled rice'];
N4_Kanji[154] = ['勉 ', '【ベン ・ つと.める】 exertion; endeavour; encourage; strive; make effort; diligent'];
N4_Kanji[155] = ['冬 ', '【トウ ・ ふゆ】 winter'];
N4_Kanji[156] = ['昼 ', '【チュウ ・ ひる】 daytime; noon'];
N4_Kanji[157] = ['茶 ', '【チャ ・ サ】 tea'];
N4_Kanji[158] = ['弟 ', '【テイ ・ ダイ ・ デ ・ おとうと】 younger brother; faithful service to elders'];
N4_Kanji[159] = ['牛 ', '【ギュウ ・ うし】 cow'];
N4_Kanji[160] = ['魚 ', '【ギョ ・ うお ・ さかな ・ -ざかな】 fish'];
N4_Kanji[161] = ['兄 ', '【ケイ ・ キョウ ・ あに】 elder brother; big brother'];
N4_Kanji[162] = ['犬 ', '【ケン ・ いぬ ・ いぬ-】 dog'];
N4_Kanji[163] = ['妹 ', '【マイ ・ いもうと】 younger sister'];
N4_Kanji[164] = ['姉',  '【シ ・ あね ・ はは】 elder sister'];
N4_Kanji[165] = ['漢 ', '【カン】 Sino-; China'];

