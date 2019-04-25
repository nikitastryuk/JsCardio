/* CHALLENGE: Find secret word
Each letter in the secret wrapped by two letters. Example: XAYXPYXPYXLYXEY = APPLE.
Left letter in the text - 252 times.
Right letter - 249 times.
*/
const text = "JUYETUPPELECBLWIPDSQABZSVYFAEZEQHPNALAHNPKDBHZJGLCUQFJNZPMBWPRELBAYYZOVKHACGRGLRDPMVAEXKGERTILNFOOEAZVULYKXYPSXICOFNBYIVKTHOVPJZHPOHDHUEBAZLUKFHAAVFSSSUUPBYJQDXWWQLICBJIRIRSPQHXOMJDZSWTSOGUGMBNSLCALCFAXQMIONSXDGPKOTFFYCPHSEWYQVHQCWLUFEKXWOIUDXJIXCHFQLAVJWHAENNKMFSDHIGYEIFNOSKJBZGZGGSMSHDHZAGPZNKBAHIXQGRDNMLZOGPRCTJGGSUJMQZQKNVCUVDINESBWPIRFASNVFJQCEYRKKNYVDRITCFYOWSGFREVZONNGGZCZXOXWQEIHJSSWXWXKUXQWCYEUXRPPAJCYRZAHEHOMRLQZFESAGMIETJQTWSRIOOCNJQGGGPZZKMXXQLUJNQORMWFFSMHOATQBEZYMYHXWJTAYYILOZOZZWBHHKEWGIMEJOKYVSYOBCFPRZJDGNHWITWSDSSJOHHVKVGWPXCNANQUFQBSKUBXXIAJPCLPRAIMEOZHVPWAGABVHJNDINVUHFZQLCVBFNKOSQDSDZZNSIBUKHLLTCGAEZCVLSRKBEXELGGOCSERYHQYNTROLQSKBGOJETDAIDCBCBIWZSEMACTMUMJEMLQKBQYQXBGJAQYNNWORREQBYQYAWPQYUORKOQDLVOVYQKVYQXFFHBFCJABCQRIBRIKVRAIVGHMDSSJQYWBTKUZHOELTOUOZTKDJGUPIWYOWGLRTTTGCJXNNMVKIHXCKBAYXWCJIYYRYMOMQCLCHPIORFTYUUUCCYMZBZOBLTXOJSDZDRTVQWCVCLSFBKVXSDCNCGZPJWJWVGYXZPTJJSCMUJOSLGXICLMGAKMOBTDTDVQTTRPGZKJMHCWNFLZUAZZOBIXBNYZXBGOSZBNEQFSHLZQSPJXTBXHYYBXKLCQIHEEQMKJFPGCJZGZLDLYIQSISDEUWQMNTXOUZDTISGUTDAFOSTMWTICVNCJWLDPKNUODMPGKUSAQPSOOSGPIVEYXIZFKLMHYPDXPDNCPGASWPYCOXSUXASQDUOJPBLCTCYVYXLDCGZEVEDVXIWINFAPKJBTIFUUAPICKKNWXXJMJMTXLPFALXDGEPMEKAXIJUPHQFAFRNEZYLDOKWCNZENHPIBKTLFUXJFMEQAJMVOPBHUSLNNNLMKMOTECEIWBYTJHHXQNKUAZEVSWRKAOFGGFRNAPCIUOEXQOGSCUGZSPWUVZKYRDFKHIXCAQCTFWADEWPQBSXXVQIIGVJJPAGVQIKUOJLWHFYZTUDCWOMZXMUELMANGTOSQKGFDQVKZDNXERHRAVXNDVOMHBOKQMVSFCADDGXGWTPGPQRMEOXVKKJUNKBJEYTECCPUGBKVHLJXSSHPOYMKRYYDTMFHAOGEPVBWMYPEIQUMCIBJSKMSRPLLGBVCUASZHAPCJICUXZDUYRLNECOYWTTQUTRSRQWZGXMQFSZBYRBBSPYZEOOMXIADSTHFYCZKYUMTWBVLINVQAQPJFODMCXSNILSKBOIUONURITQNXLQWGKAMWZAAWENJYYUBZAJBTCKAMMQPWHZKTCKIKNTTGACMJHHWHSGPBHAXZBLCJKRDFYYUUGCPKZWWYPMXPZETZBGKYVQFPVNDFBEJFAEYUVJUBQZFWNYPZNEGKNTMSZEXVMFQFTNAPXPWCLWKGHDMXBYWWAVIRYOTCHKGJAGSSBMNCZFCRXBZWBMWMNPXVOJRROOWGTWNUWRGWEWESIVGSYRCQSTEEWWYWMAWVADVIFTXEAVOVTNGAFHCQIZOQDGJQAOVUDCHTAOLZVIKQEYTCUYERUBYHESUBSPMIBQBBWWZZRZLTQDPTJABAVIJMVUGRALEHMZYLCLWENUVSHFVCURFRDHWYZDALTYXKPEKKTHLZIKIXSFTFFAWQSJOWMMOZEEFWCUDULVNTAQUDHAXXZQEUMMADPDPRGLOFFMEBQPIGPULIZLDAMBRKKMZPSHRSTWYUXBSMTCDGCZODAMMQFSIOUAYIBNNCWJCAVCJKIDZOFRSUVFBERCYQDSXAPYQBPOHSYWYSQUUIPVMCRXOOPVULMQBNETLCSBPGQEMWQFIZMITEWULRBMEOASQFIZOZMQCFKRFBKAFGVMEWYSKTWLQITJTZNBOWNPPLASKMPWPXUKRHZPHXJFJQMQVTGDUSKXPEQGJZNEKWBMLGCWKLPNPJRPCEQKIZKGWRAIPUPDIZGLGGWBLEINLIRVDLLGPQYSGEJEJAPTJRNMUVSULPWWOFOCAHZBDNGYBBQDFLEYCICNPBRDKZMZRAAYIQZWPLGNNMIRNDDADIDSYFTREZECTRELGWZEGSRVZYJRAMGQVWWOTACYURXRPFYRVKRQPCJREZPBIZWKZWTUCOHTCWQKTIYRLVXTWUILWVJDHOQAIIQJPKOSJKOLPGOJLFABPPERQQTMNJOWYNWMXAVICJDKNPGNMPKTOVTSSYNAVFLAXQBXYGRYJBFYMJFCEMQGNHRHYUNOPICPSSKHZKVDNEDRWEUNESHCUOEGXZLMCUVOJBNQCYAPQVNWPFUFQGEHJVXXUJOGGUHHTVWLRRVCTQDLLPDEGTWWMFNCEAIQFPFOQGGKQPBMDZHDPSRKLLLSSSAZIDVCPSIPXHUCGCQXPEWIJFIJQBLNVBRUBGQOHWPQRNGILIERBZJRJOZSLMIBPOCYZEQRTFENKCKLVTAJHRZUMYJGDKZDAZTYTOGVRNCQGCUTPOKVNUESBADHFGIJJCJYGONHVKHLYPWNEXUMOZOWKFNYKDOVQJRWNWSUDUFHVCIKAEDSFIYZOQYVODMWIXPMDPXTVEINYKVDRJDBMANDGZCOUZDLPIYNWLHCWQAFAQPQJDKBOUELFBMZTBQSHZLGEDBDUHGCERRBQNQZFVGPFHEQRNWLSDUXKLRFJJNKMVETKUZAGKDMKAUGPTRDENQFIAVGQZFUBYBMJCGOQLMVGCDMDDWIGTQMVJPKWLKUYXDYCURIYRVLBGHVYAGXULVQMRKXLQFPXBLNWDCTZNLRBBACTSRBUBCAAYNTKJMHZJZUYRUEJEKCORVTBGLACCNZXHUTFQZJRFADGPGUBQYNMBXZIUDHMZCPMPXTNVQREDBICYPFCJJLOLKPEYHGYDRFMXAQZHRVIWWWGXOGQTFLZVTSOUERBEIOTZHYOBSECDRSCVZFMNDVITKOTPTNPHCODRCWPQWTLEEMOAVGTSWZHCFKWURFIOTTVQPERJJUOONAWTVAVTAFTYTJRITDVHMWNZDJKLQSUXFPDKRKASEAAQEJEUKCKPWMNQSBCPFOSOBPMRPUPHAVIMQCDBSILDLSFUVNNLJDDITLGCJFBPUTTZTYHQEKQQMUEDRKZVTJTOYPFEOJZIEASAPVPHSNYHUYBGWLFWJVMEMULLYMSDQCBSXMXLUSATBEFPDDKTXRMYABHBBHAGHGHXUGZHJTLLVUGBEMWABBQXODINIKUJCXGATROZDOWYKBVKUGQTMZZGDRSFEOIMIZYPZJECADSFKGCWROONZCFWKSOBUSOOPCFLWMLEDYRWFRCMWKLQTOHBUNCUJLZBUUMFIGWEOITTTNAFDWRWEWGGYLOZTUOAOBCMIXHOKMUCJRLVKJCULZFFENCHJUTPHQIUQKFXXNNELSPUKIPWJXXHEZNDPFAEJXTRVDILUPZCWWDUTNIZZKMZDRSQIEZWZLREDAROCNASVXFCJTZEIWHVXOCSTIZMXVQLIJGMVVWINEGSCVCCSGKDXJTLETPQLQPJTVUMVZGQADTRCIIRABREEWRFZVBHCQISWNFHJFBATHKQTYXWGTUUBRXGQXWRAOECKLJLFWJODJKZUCMKABKTAXZHDWSHZXVTSUVAZZQSOHQVNHQWLCFSDOBCGGBAOMHHVPBHFHSTPBBXWWWRIPIXZEQCNGVUHALPGZUWONRBGVFPMCTCNXARWVBWYOANSLCIXLMUDPIXELEPYQLPUSQGRNDCGJUMZQGYHPMTZNGQKBXGAJBMPBXDGHMZLIMMQFMPLHMFPNNAWABFVAVCHIMULOFNKHBYHKVCHQVCNIWNOWAMRSBZLDYHEKKKSKWXRSGPRIHVSYYVSAWQABSGVBBPWRGCRJULRJCDPKOTXBKCIJTYKRQRQJXPPANQDXDPEWESQDTXNBVNZDVASKNHLMCPKBXDVOFIMSVQBVKSWLKRCHOHWUPLFUJVLWPXTLCIXPAJJPASKRNJNEELQDBXTIYEIANQJQAIKBUKPICRWPNJVFPZOLCREDZMFAZNNZDJCBFAYKKEKAITDLMHDXVDJYJIMXLPZVOZCHPYDKAKZIUOZEMONOETGVVLJHVGSFEBNIRHGZVOOJEPPDZLDQVMFKUZTWHQIOUQLFTKDBWMSOXFDZPXPSJNLWADTUODBURHMWAYZDYMNZCMTWMPHJMHNFOTLKPNXMJPSWXZLKLVPTPOUYMFZCBWALQWHXGBIWGLANZQFYTATMYRASWSNDQHQJVUIHTFNYUAZZFRZVCHAABTIVQTBDATYTVRVTWVSPCCKMSCHKRKABHJOCQVPYSBAYCNWHRBCNVUGSMBDBSKRHFGWHKUHYDKGXAIPMVFOQFZAPFJKQTDEXSNWLLPVQOBQRNGMSGVHUHOONDDXUSHKMEHWDVQSBHTKICAENUBSHPSXBPVMAIGYTCIYCVJDHOVWIOUXXYLKXJJYZRCDRBMOKYQVSRADEGSWREZHTDYRSYHGCMUQQZBCJMYKNWLMLCFQJUJABWTEKOVKWSFJRWMSWQFURTPAHKDYQDTTIZQBKRSMFPXCHBJRBVCUNOGCVRAGJXIVASDYKAMTKINXPGASMWZBNKRTILUGUFNPDKDOABUJUJDEGLAIHIUTNFJQJOAOHRQOZWWRAOXVUPUHLFKDHXBSFYGPMMTBMRBPYZYGUNZQOQZOBUJFFSFQDXQWUIPHDZVNQXKERQGVIYXIHSMOXBSRBRDYAMQFLBDKYHNTGJNYRZBQHYUTLOOELLBOEWLMFXBRVDZZUNWKGRYCFQYMZKSYZNOFGLLXPEBFQAZAEVUTXJYSYKNYZZTKEWMUSIGGQLRUEYOTUWMPAVAUJJYOFUQBFVIEWNSVCGLGAKMXRADXHDKZXYZMBNTMJQKCTAXBYLPHJQUZGKOOJKRWGPEKXZCANVFTBFAYEDWRHFYLPSLOPLNITVHDJLXXYVXKKTUVMXMOFFPGEHIPWAFQBJBHYWNLKCVVVBISSUUJRVDNWMOBHHLYAKDOTNAPKBNJBSZFFFHAHLFWABSEZIFTRQTKWTKPHXIVSGVHEDJIXZUKZFTTKOPDRJCKOTSAEGUNPGYQBMGJPYHQSDTOCUNSNEJZYLVESESCMUXDSDSWWIHAUBFDIFIRZEWDSTSROLYOMIJMENUKTXJAAUVDAUSQZVLCGOSNVSONZOBLNISMWDEYUSOYKFDWWVERIQHIWVRNUBGIQYOWVZXQAGREBEOAHKHEJKQYILTWKPBGUJHCLIRRIBBFJJYZQURTQDFUKUTPCZHIHYLXZABLNZECZOCZKOTESPKFJNKBGPFNMTGQHORRZDPPCEBYYBHLCSPLQCQOGQASZJGORLSRPPINHGPAWEYDCLEPYFTYWAFUPQSJRBKQAKPYGOLYYFKSVQETRFZRCMATLICXTCXULWGVLNSLAZPFPOQRGSSFCRFVWBTXAAGJFAHCGXBJLLTFPPRPCJYIVXUJVMYHOUFKQNTGTZNHBUJLXFPUNIGWJXXWRAUULKQWGQSVLMLNQDYUBKVNHULPAFHZNKBMMAYFCHTSKARKGYECENBUEYRTWSVVRLCUHAIYGLNONGJTJBVWUVIFXVYUIQJJNHYGWICXKCOVNJFNWURWVIWMTKLAPHELRKESSKFMDLETAWSNTUNHEOCIAKETXWGDJQCPFDNFPIGEBGKGGIFTYOQZOKKTLWORSKSTEFNIKOWOQA";
let secret = '';
/*  Steps: 
1. Get all uppercase alphabet letters to compare with
2. Find left and right letters
3. Find all letters between and form the secret string
*/
const alphabet = [];
//const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
for (let i = 0; i < 26; i++) {
  // [65 - 90] unicode alphabet chars
  alphabet.push(String.fromCharCode(i + 65));
};
const findLettersCount = (letter) => text.match(new RegExp(letter, "g")).length;
const finidLetter = (times) => alphabet.filter((letter) => findLettersCount(letter) === times).shift()
const leftLetter = finidLetter(252) // P
const rightLetter = finidLetter(249); // K

//replace(regexp, function(a,b)) a - matched substring, b - nth string found by a parenthesized capture group
text.replace(new RegExp(leftLetter + "(.)" + rightLetter, "g"), (occurrence, letterBetween) => {
  secret += letterBetween;
});

console.log(secret);