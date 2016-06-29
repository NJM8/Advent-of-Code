/*Part 1:  Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
For example:

ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
jchzalrnumimnmhp is naughty because it has no double letter.
haegwjzuvuyypxyu is naughty because it contains the string xy.
dvszwmarrgswjxmb is naughty because it contains only one vowel.
How many strings are nice?

Part 2:  Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous.

Now, a nice string is one with all of the following properties:

It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
For example:

qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.
How many strings are nice under these new rules?

*/

var input = "sszojmmrrkwuftyv isaljhemltsdzlum fujcyucsrxgatisb qiqqlmcgnhzparyg oijbmduquhfactbc jqzuvtggpdqcekgk zwqadogmpjmmxijf uilzxjythsqhwndh gtssqejjknzkkpvw wrggegukhhatygfi vhtcgqzerxonhsye tedlwzdjfppbmtdx iuvrelxiapllaxbg feybgiimfthtplui qxmmcnirvkzfrjwd vfarmltinsriqxpu oanqfyqirkraesfq xilodxfuxphuiiii yukhnchvjkfwcbiq bdaibcbzeuxqplop ivegnnpbiyxqsion ybahkbzpditgwdgt dmebdomwabxgtctu ibtvimgfaeonknoh jsqraroxudetmfyw dqdbcwtpintfcvuz tiyphjunlxddenpj fgqwjgntxagidhah nwenhxmakxqkeehg zdoheaxqpcnlhnen tfetfqojqcdzlpbm qpnxkuldeiaituggg xwttlbdwxohahwar hjkwzadmtrkegzye koksqrqcfwcaxeof wulwmrptktliyxeq gyufbedqhhyqgqzj txpunzodohikzlmj jloqfuejfkemcrvu amnflshcheuddqtc pdvcsduggcogbiia yrioavgfmeafjpcz uyhbtmbutozzqfvq mwhgfwsgyuwcdzik auqylgxhmullxpaa lgelzivplaeoivzh uyvcepielfcmswoa qhirixgwkkccuzlp zoonniyosmkeejfg iayfetpixkedyana ictqeyzyqswdskiy ejsgqteafvmorwxe lhaiqrlqqwfbrqdx ydjyboqwhfpqfydc dwhttezyanrnbybv edgzkqeqkyojowvr rmjfdwsqamjqehdq ozminkgnkwqctrxz bztjhxpjthchhfcd vrtioawyxkivrpiq dpbcsznkpkaaclyy vpoypksymdwttpvz hhdlruwclartkyap bqkrcbrksbzcggbo jerbbbnxlwfvlaiw dwkasufidwjrjfbf kkfxtjhbnmqbmfwf vmnfziwqxmioukmj rqxvcultipkecdtu fhmfdibhtjzkiqsd hdpjbuzzbyafqrpd emszboysjuvwwvts msyigmwcuybfiooq druyksfnbluvnwoh fvgstvynnfbvxhsx bmzalvducnqtuune lzwkzfzttsvpllei olmplpvjamynfyfd padcwfkhystsvyfb wjhbvxkwtbfqdilb hruaqjwphonnterf bufjobjtvxtzjpmj oiedrjvmlbtwyyuy sgiemafwfztwsyju nsoqqfudrtwszyqf vonbxquiiwxnazyl yvnmjxtptujwqudn rrnybqhvrcgwvrkq taktoxzgotzxntfu quffzywzpxyaepxa rfvjebfiddcfgmwv iaeozntougqwnzoh scdqyrhoqmljhoil bfmqticltmfhxwld brbuktbyqlyfpsdl oidnyhjkeqenjlhd kujsaiqojopvrygg vebzobmdbzvjnjtk uunoygzqjopwgmbg piljqxgicjzgifso ikgptwcjzywswqnw pujqsixoisvhdvwi trtuxbgigogfsbbk mplstsqclhhdyaqk gzcwflvmstogdpvo tfjywbkmimyyqcjd gijutvhruqcsiznq ibxkhjvzzxgavkha btnxeqvznkxjsgmq tjgofgauxaelmjoq sokshvyhlkxerjrv ltogbivktqmtezta uduwytzvqvfluyuf msuckpthtgzhdxan fqmcglidvhvpirzr gwztkqpcwnutvfga bsjfgsrntdhlpqbx xloczbqybxmiopwt orvevzyjliomkkgu mzjbhmfjjvaziget tlsdxuhwdmghdyjb atoecyjhwmznaewi pyxpyvvipbqibiox ajbfmpqqobfsmesj siknbzefjblnohgd eqfhgewbblwdfkmc opylbscrotckkrbk lbwxbofgjkzdxkle ceixfjstaptdomvm hnkrqxifjmmjktie aqykzeuzvvetoygd fouahjimfcisxima prkzhutbqsyrhjzx qqwliakathnsbzne sayhgqtlcqqidqhj ygduolbysehdudra zricvxhdzznuxuce ucvzakslykpgsixd udirhgcttmyspgsb yuwzppjzfsjhhdzi gtqergjiuwookwre xvxexbjyjkxovvwf mlpaqhnnkqxrmwmm ezuqbrjozwuqafhb mcarusdthcbsonoq weeguqeheeiigrue pngtfugozxofaqxv copphvbjcmfspenv jiyahihykjjkdaya gdqnmesvptuyrfwp vbdscfywqmfxbohh crtrfuxyjypzubrg seihvevtxywxhflp fvvpmgttnapklwou qmqaqsajmqwhetpk zetxvrgjmblxvakr kpvwblrizaabmnhz mwpvvzaaicntrkcp clqyjiegtdsswqfm ymrcnqgcpldgfwtm nzyqpdenetncgnwq cmkzevgacnmdkqro kzfdsnamjqbeirhi kpxrvgvvxapqlued rzskbnfobevzrtqu vjoahbfwtydugzap ykbbldkoijlvicbl mfdmroiztsgjlasb quoigfyxwtwprmdr ekxjqafwudgwfqjm obtvyjkiycxfcdpb lhoihfnbuqelthof eydwzitgxryktddt rxsihfybacnpoyny bsncccxlplqgygtw rvmlaudsifnzhcqh huxwsyjyebckcsnn gtuqzyihwhqvjtes zreeyomtngvztveq nwddzjingsarhkxb nuqxqtctpoldrlsh wkvnrwqgjooovhpf kwgueyiyffudtbyg tpkzapnjxefqnmew ludwccvkihagvxal lfdtzhfadvabghna njqmlsnrkcfhtvbb cajzbqleghhnlgap vmitdcozzvqvzatp eelzefwqwjiywbcz uyztcuptfqvymjpi aorhnrpkjqqtgnfo lfrxfdrduoeqmwwp vszpjvbctblplinh zexhadgpqfifcqrz ueirfnshekpemqua qfremlntihbwabtb nwznunammfexltjc zkyieokaaogjehwt vlrxgkpclzeslqkq xrqrwfsuacywczhs olghlnfjdiwgdbqc difnlxnedpqcsrdf dgpuhiisybjpidsj vlwmwrikmitmoxbt sazpcmcnviynoktm pratafauetiknhln ilgteekhzwlsfwcn ywvwhrwhkaubvkbl qlaxivzwxyhvrxcf hbtlwjdriizqvjfb nrmsononytuwslsa mpxqgdthpoipyhjc mcdiwmiqeidwcglk vfbaeavmjjemfrmo qzcbzmisnynzibrc shzmpgxhehhcejhb wirtjadsqzydtyxd qjlrnjfokkqvnpue dxawdvjntlbxtuqc wttfmnrievfestog eamjfvsjhvzzaobg pbvfcwzjgxahlrag omvmjkqqnobvnzkn lcwmeibxhhlxnkzv uiaeroqfbvlazegs twniyldyuonfyzqw wgjkmsbwgfotdabi hnomamxoxvrzvtew ycrcfavikkrxxfgw isieyodknagzhaxy mgzdqwikzullzyco mumezgtxjrrejtrs nwmwjcgrqiwgfqel wjgxmebfmyjnxyyp durpspyljdykvzxf zuslbrpooyetgafh kuzrhcjwbdouhyme wyxuvbciodscbvfm kbnpvuqwmxwfqtqe zddzercqogdpxmft sigrdchxtgavzzjh lznjolnorbuddgcs ycnqabxlcajagwbt bnaudeaexahdgxsj rlnykxvoctfwanms jngyetkoplrstfzt tdpxknwacksotdub yutqgssfoptvizgr lzmqnxeqjfnsxmsa iqpgfsfmukovsdgu qywreehbidowtjyz iozamtgusdctvnkw ielmujhtmynlwcfd hzxnhtbnmmejlkyf ftbslbzmiqkzebtd bcwdqgiiizmohack dqhfkzeddjzbdlxu mxopokqffisxosci vciatxhtuechbylk khtkhcvelidjdena blatarwzfqcapkdt elamngegnczctcck xeicefdbwrxhuxuf sawvdhjoeahlgcdr kmdcimzsfkdfpnir axjayzqlosrduajb mfhzreuzzumvoggr iqlbkbhrkptquldb xcvztvlshiefuhgb pkvwyqmyoazocrio ajsxkdnerbmhyxaj tudibgsbnpnizvsi cxuiydkgdccrqvkh cyztpjesdzmbcpot nnazphxpanegwitx uphymczbmjalmsct yyxiwnlrogyzwqmg gmqwnahjvvdyhnfa utolskxpuoheugyl mseszdhyzoyavepd ycqknvbuvcjfgmlc sknrxhxbfpvpeorn zqxqjetooqcodwml sesylkpvbndrdhsy fryuxvjnsvnjrxlw mfxusewqurscujnu mbitdjjtgzchvkfv ozwlyxtaalxofovd wdqcduaykxbunpie rlnhykxiraileysk wgoqfrygttlamobg kflxzgxvcblkpsbz tmkisflhativzhde owsdrfgkaamogjzd gaupjkvkzavhfnes wknkurddcknbdleg lltviwincmbtduap qwzvspgbcksyzzmb ydzzkumecryfjgnk jzvmwgjutxoysaam icrwpyhxllbardkr jdopyntshmvltrve afgkigxcuvmdbqou mfzzudntmvuyhjzt duxhgtwafcgrpihc tsnhrkvponudumeb sqtvnbeiigdzbjgv eczmkqwvnsrracuo mhehsgqwiczaiaxv kaudmfvifovrimpd lupikgivechdbwfr mwaaysrndiutuiqx aacuiiwgaannunmm tjqjbftaqitukwzp lrcqyskykbjpaekn lirrvofbcqpjzxmr jurorvzpplyelfml qonbllojmloykjqe sllkzqujfnbauuqp auexjwsvphvikali usuelbssqmbrkxyc wyuokkfjexikptvv wmfedauwjgbrgytl sfwvtlzzebxzmuvw rdhqxuechjsjcvaf kpavhqkukugocsxu ovnjtumxowbxduts zgerpjufauptxgat pevvnzjfwhjxdoxq pmmfwxajgfziszcs difmeqvaghuitjhs icpwjbzcmlcterwm ngqpvhajttxuegyh mosjlqswdngwqsmi frlvgpxrjolgodlu eazwgrpcxjgoszeg bbtsthgkjrpkiiyk tjonoglufuvsvabe xhkbcrofytmbzrtk kqftfzdmpbxjynps kmeqpocbnikdtfyv qjjymgqxhnjwxxhp dmgicrhgbngdtmjt zdxrhdhbdutlawnc afvoekuhdboxghvx hiipezngkqcnihty bbmqgheidenweeov suprgwxgxwfsgjnx adeagikyamgqphrj zzifqinoeqaorjxg adhgppljizpaxzld lvxyieypvvuqjiyc nljoakatwwwoovzn fcrkfxclcacshhmx ownnxqtdhqbgthch lmfylrcdmdkgpwnj hlwjfbvlswbzpbjr mkofhdtljdetcyvp synyxhifbetzarpo agnggugngadrcxoc uhttadmdmhidpyjw ohfwjfhunalbubpr pzkkkkwrlvxiuysn kmidbxmyzkjrwjhu egtitdydwjxmajnw civoeoiuwtwgbqqs dfptsguzfinqoslk tdfvkreormspprer zvnvbrmthatzztwi ffkyddccrrfikjde hrrmraevdnztiwff qaeygykcpbtjwjbr purwhitkmrtybslh qzziznlswjaussel dfcxkvdpqccdqqxj tuotforulrrytgyn gmtgfofgucjywkev wkyoxudvdkbgpwhd qbvktvfvipftztnn otckgmojziezmojb inxhvzbtgkjxflay qvxapbiatuudseno krpvqosbesnjntut oqeukkgjsfuqkjbb prcjnyymnqwqksiz vuortvjxgckresko orqlyobvkuwgathr qnpyxlnazyfuijox zwlblfkoklqmqzkw hmwurwtpwnrcsanl jzvxohuakopuzgpf sfcpnxrviphhvxmx qtwdeadudtqhbely dbmkmloasqphnlgj olylnjtkxgrubmtk nxsdbqjuvwrrdbpq wbabpirnpcsmpipw hjnkyiuxpqrlvims enzpntcjnxdpuqch vvvqhlstzcizyimn triozhqndbttglhv fukvgteitwaagpzx uhcvukfbmrvskpen tizcyupztftzxdmt vtkpnbpdzsaluczz wodfoyhoekidxttm otqocljrmwfqbxzu linfbsnfvixlwykn vxsluutrwskslnye zbshygtwugixjvsi zdcqwxvwytmzhvoo wrseozkkcyctrmei fblgtvogvkpqzxiy opueqnuyngegbtnf qxbovietpacqqxok zacrdrrkohfygddn gbnnvjqmkdupwzpq qgrgmsxeotozvcak hnppukzvzfmlokid dzbheurndscrrtcl wbgdkadtszebbrcw fdmzppzphhpzyuiz bukomunhrjrypohj ohodhelegxootqbj rsplgzarlrknqjyh punjjwpsxnhpzgvu djdfahypfjvpvibm mlgrqsmhaozatsvy xwktrgyuhqiquxgn wvfaoolwtkbrisvf plttjdmguxjwmeqr zlvvbwvlhauyjykw cigwkbyjhmepikej masmylenrusgtyxs hviqzufwyetyznze nzqfuhrooswxxhus pdbdetaqcrqzzwxf oehmvziiqwkzhzib icgpyrukiokmytoy ooixfvwtiafnwkce rvnmgqggpjopkihs wywualssrmaqigqk pdbvflnwfswsrirl jeaezptokkccpbuj mbdwjntysntsaaby ldlgcawkzcwuxzpz lwktbgrzswbsweht ecspepmzarzmgpjm qmfyvulkmkxjncai izftypvwngiukrns zgmnyjfeqffbooww nyrkhggnprhedows yykzzrjmlevgffah mavaemfxhlfejfki cmegmfjbkvpncqwf zxidlodrezztcrij fseasudpgvgnysjv fupcimjupywzpqzp iqhgokavirrcvyys wjmkcareucnmfhui nftflsqnkgjaexhq mgklahzlcbapntgw kfbmeavfxtppnrxn nuhyvhknlufdynvn nviogjxbluwrcoec tyozixxxaqiuvoys kgwlvmvgtsvxojpr moeektyhyonfdhrb kahvevmmfsmiiqex xcywnqzcdqtvhiwd fnievhiyltbvtvem jlmndqufirwgtdxd muypbfttoeelsnbs rypxzbnujitfwkou ubmmjbznskildeoj ofnmizdeicrmkjxp rekvectjbmdnfcib yohrojuvdexbctdh gwfnfdeibynzjmhz jfznhfcqdwlpjull scrinzycfhwkmmso mskutzossrwoqqsi rygoebkzgyzushhr jpjqiycflqkexemx arbufysjqmgaapnl dbjerflevtgweeoj snybnnjlmwjvhois fszuzplntraprmbj mkvaatolvuggikvg zpuzuqygoxesnuyc wnpxvmxvllxalulm eivuuafkvudeouwy rvzckdyixetfuehr qgmnicdoqhveahyx miawwngyymshjmpj pvckyoncpqeqkbmx llninfenrfjqxurv kzbjnlgsqjfuzqtp rveqcmxomvpjcwte bzotkawzbopkosnx ktqvpiribpypaymu wvlzkivbukhnvram uohntlcoguvjqqdo ajlsiksjrcnzepkt xsqatbldqcykwusd ihbivgzrwpmowkop vfayesfojmibkjpb uaqbnijtrhvqxjtb hhovshsfmvkvymba jerwmyxrfeyvxcgg hncafjwrlvdcupma qyvigggxfylbbrzt hiiixcyohmvnkpgk mmitpwopgxuftdfu iaxderqpceboixoa zodfmjhuzhnsqfcb sthtcbadrclrazsi bkkkkcwegvypbrio wmpcofuvzemunlhj gqwebiifvqoeynro juupusqdsvxcpsgv rbhdfhthxelolyse kjimpwnjfrqlqhhz rcuigrjzarzpjgfq htxcejfyzhydinks sxucpdxhvqjxxjwf omsznfcimbcwaxal gufmtdlhgrsvcosb bssshaqujtmluerz uukotwjkstgwijtr kbqkneobbrdogrxk ljqopjcjmelgrakz rwtfnvnzryujwkfb dedjjbrndqnilbeh nzinsxnpptzagwlb lwqanydfirhnhkxy hrjuzfumbvfccxno okismsadkbseumnp sfkmiaiwlktxqvwa hauwpjjwowbunbjj nowkofejwvutcnui bqzzppwoslaeixro urpfgufwbtzenkpj xgeszvuqwxeykhef yxoldvkyuikwqyeq onbbhxrnmohzskgg qcikuxakrqeugpoa lnudcqbtyzhlpers nxduvwfrgzaailgl xniuwvxufzxjjrwz ljwithcqmgvntjdj awkftfagrfzywkhs uedtpzxyubeveuek bhcqdwidbjkqqhzl iyneqjdmlhowwzxx kvshzltcrrururty zgfpiwajegwezupo tkrvyanujjwmyyri ercsefuihcmoaiep ienjrxpmetinvbos jnwfutjbgenlipzq bgohjmrptfuamzbz rtsyamajrhxbcncw tfjdssnmztvbnscs bgaychdlmchngqlp kfjljiobynhwfkjo owtdxzcpqleftbvn ltjtimxwstvzwzjj wbrvjjjajuombokf zblpbpuaqbkvsxye gwgdtbpnlhyqspdi abipqjihjqfofmkx nlqymnuvjpvvgova avngotmhodpoufzn qmdyivtzitnrjuae xfwjmqtqdljuerxi csuellnlcyqaaamq slqyrcurcyuoxquo dcjmxyzbzpohzprl uqfnmjwniyqgsowb rbmxpqoblyxdocqc ebjclrdbqjhladem ainnfhxnsgwqnmyo eyytjjwhvodtzquf iabjgmbbhilrcyyp pqfnehkivuelyccc xgjbyhfgmtseiimt jwxyqhdbjiqqqeyy gxsbrncqkmvaryln vhjisxjkinaejytk seexagcdmaedpcvh lvudfgrcpjxzdpvd fxtegyrqjzhmqean dnoiseraqcoossmc nwrhmwwbykvwmgep udmzskejvizmtlce hbzvqhvudfdlegaa cghmlfqejbxewskv bntcmjqfwomtbwsb qezhowyopjdyhzng todzsocdkgfxanbz zgjkssrjlwxuhwbk eibzljqsieriyrzr wamxvzqyycrxotjp epzvfkispwqynadu dwlpfhtrafrxlyie qhgzujhgdruowoug girstvkahaemmxvh baitcrqmxhazyhbl xyanqcchbhkajdmc gfvjmmcgfhvgnfdq tdfdbslwncbnkzyz jojuselkpmnnbcbb hatdslkgxtqpmavj dvelfeddvgjcyxkj gnsofhkfepgwltse mdngnobasfpewlno qssnbcyjgmkyuoga glvcmmjytmprqwvn gwrixumjbcdffsdl lozravlzvfqtsuiq sicaflbqdxbmdlch inwfjkyyqbwpmqlq cuvszfotxywuzhzi igfxyoaacoarlvay ucjfhgdmnjvgvuni rvvkzjsytqgiposh jduinhjjntrmqroz yparkxbgsfnueyll lyeqqeisxzfsqzuj woncskbibjnumydm lltucklragtjmxtl ubiyvmyhlesfxotj uecjseeicldqrqww xxlxkbcthufnjbnm lhqijovvhlffpxga fzdgqpzijitlogjz efzzjqvwphomxdpd jvgzvuyzobeazssc hejfycgxywfjgbfw yhjjmvkqfbnbliks sffvfyywtlntsdsz dwmxqudvxqdenrur asnukgppdemxrzaz nwqfnumblwvdpphx kqsmkkspqvxzuket cpnraovljzqiquaz qrzgrdlyyzbyykhg opoahcbiydyhsmqe hjknnfdauidjeydr hczdjjlygoezadow rtflowzqycimllfv sfsrgrerzlnychhq bpahuvlblcolpjmj albgnjkgmcrlaicl pijyqdhfxpaxzdex eeymiddvcwkpbpux rqwkqoabywgggnln vckbollyhgbgmgwh ylzlgvnuvpynybkm hpmbxtpfosbsjixt ocebeihnhvkhjfqz tvctyxoujdgwayze efvhwxtuhapqxjen rusksgefyidldmpo nkmtjvddfmhirmzz whvtsuadwofzmvrt iiwjqvsdxudhdzzk gucirgxaxgcassyo rmhfasfzexeykwmr hynlxcvsbgosjbis huregszrcaocueen pifezpoolrnbdqtv unatnixzvdbqeyox xtawlpduxgacchfe bdvdbflqfphndduf xtdsnjnmzccfptyt nkhsdkhqtzqbphhg aqcubmfkczlaxiyb moziflxpsfubucmv srdgnnjtfehiimqx pwfalehdfyykrohf sysxssmvewyfjrve brsemdzosgqvvlxe bimbjoshuvflkiat hkgjasmljkpkwwku sbnmwjvodygobpqc bbbqycejueruihhd corawswvlvneipyc gcyhknmwsczcxedh kppakbffdhntmcqp ynulzwkfaemkcefp pyroowjekeurlbii iwksighrswdcnmxf glokrdmugreygnsg xkmvvumnfzckryop aesviofpufygschi csloawlirnegsssq fkqdqqmlzuxbkzbc uzlhzcfenxdfjdzp poaaidrktteusvyf zrlyfzmjzfvivcfr qwjulskbniitgqtx gjeszjksbfsuejki vczdejdbfixbduaq knjdrjthitjxluth jweydeginrnicirl bottrfgccqhyycsl eiquffofoadmbuhk lbqfutmzoksscswf xfmdvnvfcnzjprba uvugkjbkhlaoxmyx wadlgtpczgvcaqqv inzrszbtossflsxk dbzbtashaartczrj qbjiqpccefcfkvod hluujmokjywotvzy thwlliksfztcmwzh arahybspdaqdexrq nuojrmsgyipdvwyx hnajdwjwmzattvst sulcgaxezkprjbgu rjowuugwdpkjtypw oeugzwuhnrgiaqga wvxnyymwftfoswij pqxklzkjpcqscvde tuymjzknntekglqj odteewktugcwlhln exsptotlfecmgehc eeswfcijtvzgrqel vjhrkiwmunuiwqau zhlixepkeijoemne pavfsmwesuvebzdd jzovbklnngfdmyws nbajyohtzfeoiixz ciozmhrsjzrwxvhz gwucrxieqbaqfjuv uayrxrltnohexawc flmrbhwsfbcquffm gjyabmngkitawlxc rwwtggvaygfbovhg xquiegaisynictjq oudzwuhexrwwdbyy lengxmguyrwhrebb uklxpglldbgqsjls dbmvlfeyguydfsxq zspdwdqcrmtmdtsc mqfnzwbfqlauvrgc amcrkzptgacywvhv ndxmskrwrqysrndf mwjyhsufeqhwisju srlrukoaenyevykt tnpjtpwawrxbikct geczalxmgxejulcv tvkcbqdhmuwcxqci tiovluvwezwwgaox zrjhtbgajkjqzmfo vcrywduwsklepirs lofequdigsszuioy wxsdzomkjqymlzat iabaczqtrfbmypuy ibdlmudbajikcncr rqcvkzsbwmavdwnv ypxoyjelhllhbeog fdnszbkezyjbttbg uxnhrldastpdjkdz xfrjbehtxnlyzcka omjyfhbibqwgcpbv eguucnoxaoprszmp xfpypldgcmcllyzz aypnmgqjxjqceelv mgzharymejlafvgf tzowgwsubbaigdok ilsehjqpcjwmylxc pfmouwntfhfnmrwk csgokybgdqwnduwp eaxwvxvvwbrovypz nmluqvobbbmdiwwb lnkminvfjjzqbmio mjiiqzycqdhfietz towlrzriicyraevq obiloewdvbrsfwjo lmeooaajlthsfltw ichygipzpykkesrw gfysloxmqdsfskvt saqzntehjldvwtsx pqddoemaufpfcaew mjrxvbvwcreaybwe ngfbrwfqnxqosoai nesyewxreiqvhald kqhqdlquywotcyfy liliptyoqujensfi nsahsaxvaepzneqq zaickulfjajhctye gxjzahtgbgbabtht koxbuopaqhlsyhrp jhzejdjidqqtjnwe dekrkdvprfqpcqki linwlombdqtdeyop dvckqqbnigdcmwmx yaxygbjpzkvnnebv rlzkdkgaagmcpxah cfzuyxivtknirqvt obivkajhsjnrxxhn lmjhayymgpseuynn bbjyewkwadaipyju lmzyhwomfypoftuu gtzhqlgltvatxack jfflcfaqqkrrltgq txoummmnzfrlrmcg ohemsbfuqqpucups imsfvowcbieotlok tcnsnccdszxfcyde qkcdtkwuaquajazz arcfnhmdjezdbqku srnocgyqrlcvlhkb mppbzvfmcdirbyfw xiuarktilpldwgwd ypufwmhrvzqmexpc itpdnsfkwgrdujmj cmpxnodtsswkyxkr wayyxtjklfrmvbfp mfaxphcnjczhbbwy sjxhgwdnqcofbdra pnxmujuylqccjvjm ivamtjbvairwjqwl deijtmzgpfxrclss bzkqcaqagsynlaer tycefobvxcvwaulz ctbhnywezxkdsswf urrxxebxrthtjvib fpfelcigwqwdjucv ngfcyyqpqulwcphb rltkzsiipkpzlgpw qfdsymzwhqqdkykc balrhhxipoqzmihj rnwalxgigswxomga ghqnxeogckshphgr lyyaentdizaumnla exriodwfzosbeoib speswfggibijfejk yxmxgfhvmshqszrq hcqhngvahzgawjga qmhlsrfpesmeksur eviafjejygakodla kvcfeiqhynqadbzv fusvyhowslfzqttg girqmvwmcvntrwau yuavizroykfkdekz jmcwohvmzvowrhxf kzimlcpavapynfue wjudcdtrewfabppq yqpteuxqgbmqfgxh xdgiszbuhdognniu jsguxfwhpftlcjoh whakkvspssgjzxre ggvnvjurlyhhijgm krvbhjybnpemeptr pqedgfojyjybfbzr jzhcrsgmnkwwtpdo yyscxoxwofslncmp gzjhnxytmyntzths iteigbnqbtpvqumi zjevfzusnjukqpfw xippcyhkfuounxqk mcnhrcfonfdgpkyh pinkcyuhjkexbmzj lotxrswlxbxlxufs fmqajrtoabpckbnu wfkwsgmcffdgaqxg qfrsiwnohoyfbidr czfqbsbmiuyusaqs ieknnjeecucghpoo cevdgqnugupvmsge gjkajcyjnxdrtuvr udzhrargnujxiclq zqqrhhmjwermjssg ggdivtmgoqajydzz wnpfsgtxowkjiivl afbhqawjbotxnqpd xjpkifkhfjeqifdn oyfggzsstfhvticp kercaetahymeawxy khphblhcgmbupmzt iggoqtqpvaebtiol ofknifysuasshoya qxuewroccsbogrbv apsbnbkiopopytgu zyahfroovfjlythh bxhjwfgeuxlviydq uvbhdtvaypasaswa qamcjzrmesqgqdiz hjnjyzrxntiycyel wkcrwqwniczwdxgq hibxlvkqakusswkx mzjyuenepwdgrkty tvywsoqslfsulses jqwcwuuisrclircv xanwaoebfrzhurct ykriratovsvxxasf qyebvtqqxbjuuwuo telrvlwvriylnder acksrrptgnhkeiaa yemwfjhiqlzsvdxf banrornfkcymmkcc ytbhxvaeiigjpcgm crepyazgxquposkn xlqwdrytzwnxzwzv xtrbfbwopxscftps kwbytzukgseeyjla qtfdvavvjogybxjg ytbmvmrcxwfkgvzw nbscbdskdeocnfzr sqquwjbdxsxhcseg ewqxhigqcgszfsuw cvkyfcyfmubzwsee dcoawetekigxgygd ohgqnqhfimyuqhvi otisopzzpvnhctte bauieohjejamzien ewnnopzkujbvhwce aeyqlskpaehagdiv pncudvivwnnqspxy ytugesilgveokxcg zoidxeelqdjesxpr ducjccsuaygfchzj smhgllqqqcjfubfc nlbyyywergronmir prdawpbjhrzsbsvj nmgzhnjhlpcplmui eflaogtjghdjmxxz qolvpngucbkprrdc ixywxcienveltgho mwnpqtocagenkxut iskrfbwxonkguywx ouhtbvcaczqzmpua srewprgddfgmdbao dyufrltacelchlvu czmzcbrkecixuwzz dtbeojcztzauofuk prrgoehpqhngfgmw baolzvfrrevxsyke zqadgxshwiarkzwh vsackherluvurqqj surbpxdulvcvgjbd wqxytarcxzgxhvtx vbcubqvejcfsgrac zqnjfeapshjowzja hekvbhtainkvbynx knnugxoktxpvoxnh knoaalcefpgtvlwm qoakaunowmsuvkus ypkvlzcduzlezqcb ujhcagawtyepyogh wsilcrxncnffaxjf gbbycjuscquaycrk aduojapeaqwivnly ceafyxrakviagcjy nntajnghicgnrlst vdodpeherjmmvbje wyyhrnegblwvdobn xlfurpghkpbzhhif xyppnjiljvirmqjo kglzqahipnddanpi omjateouxikwxowr ocifnoopfglmndcx emudcukfbadyijev ooktviixetfddfmh wtvrhloyjewdeycg cgjncqykgutfjhvb nkwvpswppeffmwad hqbcmfhzkxmnrivg mdskbvzguxvieilr anjcvqpavhdloaqh erksespdevjylenq fadxwbmisazyegup iyuiffjmcaahowhj ygkdezmynmltodbv fytneukxqkjattvh woerxfadbfrvdcnz iwsljvkyfastccoa movylhjranlorofe drdmicdaiwukemep knfgtsmuhfcvvshg ibstpbevqmdlhajn tstwsswswrxlzrqs estyydmzothggudf jezogwvymvikszwa izmqcwdyggibliet nzpxbegurwnwrnca kzkojelnvkwfublh xqcssgozuxfqtiwi tcdoigumjrgvczfv ikcjyubjmylkwlwq kqfivwystpqzvhan bzukgvyoqewniivj iduapzclhhyfladn fbpyzxdfmkrtfaeg yzsmlbnftftgwadz";

var vowelCheck = function(stringLetters) {
	var count = 0;
	var regexp = /[aeiou]/;
	for (var i = 0; i < stringLetters.length; i++) {
		if (regexp.test(stringLetters[i])) {
			count += 1;
		}
	}
	if (count >= 3) {
		return true;
	} else {
		return false;
	}
};

var doubleLetterCheck = function(stringLetters) {
	for (var i = 0; i < stringLetters.length - 1; i++) {
		if (stringLetters[i] === stringLetters[i + 1]) {
			return true;
		}
	}
	return false;
};

var badLetterCheck = function(stringLetters) {
	for (var i = 0; i < stringLetters.length; i++) {
		var letterPair = stringLetters[i] + stringLetters[i + 1];
		if (letterPair === 'ab' || 
			letterPair === 'cd' || 
			letterPair === 'pq' || 
			letterPair === 'xy') {
			return true;
		}
	}
	return false;
};

var doubleLetterRepeatCheck = function(stringLetters) {
	for (var i = 0; i < stringLetters.length; i++) {
		var letterPair = stringLetters[i] + stringLetters[i + 1];
		for (var j = i + 2; j < stringLetters.length; j++) {
			var secondLetterPair = stringLetters[j] + stringLetters[j + 1];
			if (letterPair === secondLetterPair) {
				return true;
			}
		}
	}
	return false;
};

var singleLetterRepeatCheck = function(stringLetters) {
	for (var i = 0; i < stringLetters.length; i++) {
		if (stringLetters[i] === stringLetters[i + 2]) {
			return true;
		}
	}
	return false;
};

var main = function(input, whichPart) {
	// console.log(input);
	var niceCount = 0;
	var stringList = input.split(' ');
	
	for (var i = 0; i < stringList.length; i++) {
		var stringLetters = stringList[i].split('');
		// console.log( "3 vowel check: " + vowelCheck(stringLetters));
		// console.log("letter twice in a row check: " + doubleLetterCheck(stringLetters));
		// console.log("bad string check: " + badLetterCheck(stringLetters));
		if (whichPart === 1) {
			if (vowelCheck(stringLetters) === true && doubleLetterCheck(stringLetters) === true && 
				badLetterCheck(stringLetters) === false) {
				niceCount += 1;
			} 
		} else if (whichPart === 2) {
			// console.log(whichPart + ":" + stringLetters);
			if (doubleLetterRepeatCheck(stringLetters) === true && singleLetterRepeatCheck(stringLetters) === true) {
				niceCount += 1;
			}
		}
	};

	return niceCount;
}
/* Input 1 into second arg for answer to part 1, 2 for answer to part 2*/
console.log(main(input, 2));

var mainTest = function() {
	var test1 = main('ugknbfddgicrmopn', 1);
	console.log('test1 should be 1: ' + test1);

	var test2 = main('aaa', 1);
	console.log('test2 should be 1: ' + test2);

	var test3 = main('jchzalrnumimnmhp', 1);
	console.log('test3 should be 0: ' + test3);

	var test4 = main('haegwjzuvuyypxyu', 1);
	console.log('test4 should be 0: ' + test4);

	var test5 = main('dvszwmarrgswjxmb', 1);
	console.log('test5 should be 0: ' + test5);

	var test6 = main('qjhvhtzxzqqjkmpb', 2);
	console.log('test6 should be 1: ' + test6);

	var test7 = main('xxyxx', 2);
	console.log('test7 should be 1: ' + test7);

	var test8 = main('uurcxstgmygtbstg', 2);
	console.log('test8 should be 0: ' + test8);

	var test9 = main('ieodomkazucvgmuy', 2);
	console.log('test9 should be 0: ' + test9);
};

// mainTest();

var functionTests = function() {
	var hasThreeVowels = 'aeiou';
	var notThreeVowels = 'hjkeln';
	var hasDoubleLetter = 'acddefg';
	var notDoubleLetter = 'abcdefe';
	var hasBadLetters = 'jsnfhcd';
	var notBadLetters = 'poiuytr';
	var hasDoubleLetterRepeat = "qjhvhtzxzqqjkmpb";
	var notDoubleLetterRepeat = "ieodomkazucvgmuy";
	var hasSingleLetterRepeat = "xxyxx";
	var notSingleLetterRepeat = "uurcxstgmygtbstg";

	var test1 = vowelCheck(hasThreeVowels.split(''));
	console.log('test1 should be true: ' + test1);

	var test2 = vowelCheck(notThreeVowels.split(''));
	console.log('test2 should be false: ' + test2);

	var test3 = doubleLetterCheck(hasDoubleLetter.split(''));
	console.log('test3 should be true: ' + test3);

	var test4 = doubleLetterCheck(notDoubleLetter.split(''));
	console.log('test4 should be false: ' + test4);

	var test5 = badLetterCheck(hasBadLetters.split(''));
	console.log('test5 should be true: ' + test5);

	var test6 = badLetterCheck(notBadLetters.split(''));
	console.log('test6 should be false: ' + test6);

	var test7 = doubleLetterRepeatCheck(hasDoubleLetterRepeat.split(''));
	console.log('test6 should be true: ' + test7);

	var test8 = doubleLetterRepeatCheck(notDoubleLetterRepeat.split(''));
	console.log('test6 should be false: ' + test8);

	var test9 = singleLetterRepeatCheck(hasSingleLetterRepeat.split(''));
	console.log('test6 should be true: ' + test9);

	var test10 = singleLetterRepeatCheck(notSingleLetterRepeat.split(''));
	console.log('test6 should be false: ' + test10);
};

// functionTests();




