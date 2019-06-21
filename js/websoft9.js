//*****************************备注******************************************* */

//应用名称(最多不超过2个)，默认为Example,表示安装的是示例
//var set_apps=["WordPress","Mybb"];
//var set_apps=["WordPress"];
//var set_apps=["Joomla"];

//*****************************备注******************************************* */

var set_infrastructure="WAMPServer";
var set_apps=["Example"];


//********************JSON数据区 Start********************************************** */
  var websoft9stack=
  [
    {
    "name":"LAMP",
    "apps":"",
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"lamp"
  },
  
  {
    "name":"LNMP",
    "apps":"",
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"lnmp"
  },
  
  
  {
    "name":"LCMP",
    "apps":"",
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Caddy"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"lcmp"
  },
  
  {
    "name":"LNMT",
    "apps":"",
    "language":["PHP","Java"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx","Tomcat"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"lnmt"
  },
  
  {
    "name":"LANMP",
    "apps":"",
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL","MariaDB"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx","Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"lanmp"
  },
  
  {
    "name":"Java(Linux)",
    "apps":"",
    "language":["Java"],
    "os":"Linux",
    "database":["MySQL","MariaDB"],
    "databasetool":["phpMyAdmin(Docker)"],
    "httpserver":["Nginx","Tomcat"],
    "tools":"",
    "helpurl":"java-on-tomcat"
  },
  
  {
    "name":"Java(Windows)",
    "apps":"",
    "language":["Java"],
    "os":"Windows",
    "database":["MySQL","MariaDB"],
    "databasetool":["jspMyAdmin"],
    "httpserver":["Nginx","Tomcat"],
    "tools":"",
    "helpurl":"java-on-tomcat"
  },
  
  {
    "name":"WAMP",
    "apps":"",
    "language":["PHP"],
    "os":"Windows",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin","dbForge"],
    "httpserver":["Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"wamp"
  },
  
  {
    "name":"WAMPServer",
    "apps":"",
    "language":["PHP"],
    "os":"Windows",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin","dbForge"],
    "httpserver":["Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"wampserver"
  },
  
  {
    "name":"XAMPP",
    "apps":"",
    "language":["PHP","JAVA"],
    "os":"Windows",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Apache","Tomcat"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"xampp"
  },
  
  {
    "name":"IIS",
    "apps":"",
    "language":["PHP",".NET","Java"],
    "os":"Windows",
    "database":["MySQL","SQLServer Express"],
    "databasetool":["phpMyAdmin","SQL Server Managerment Studio"],
    "httpserver":["IIS","Tomcat"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"iis"
  },
  
  {
    "name":".NET",
    "apps":"",
    "language":[".NET"],
    "os":"Windows",
    "database":["MySQL","SQLServer Express"],
    "databasetool":["MysqlFront","SQL Server Managerment Studio"],
    "httpserver":["IIS"],
    "tools":"",
    "helpurl":"iis"
  },
  
  {
    "name":"PHP ON IIS",
    "apps":"",
    "language":["PHP",".NET"],
    "os":"Windows",
    "database":["MySQL","SQLServer Express"],
    "databasetool":["phpMyAdmin","SQL Server Managerment Studio"],
    "httpserver":["IIS"],
    "tools":"",
    "helpurl":"iis"
  },
  
  ];

  //安装到基础环境上的应用程序
  var appslist=[
    {"appname":"chanzhiESP",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"CmsEasy",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"Codiad",     "apphelpurl":"codiad",     "installdr":"/"},
    {"appname":"DzzOffice","apphelpurl":"dzzoffice","installdr":"/"},
    {"appname":"Discuz",    "apphelpurl":"discuz",    "installdr":"/"},
    {"appname":"Dolibarr",    "apphelpurl":"dolibarr",    "installdr":"/"},
    {"appname":"Drupal",    "apphelpurl":"drupal",    "installdr":"/"},
    {"appname":"DreamFactory",    "apphelpurl":"dreamfactory",    "installdr":"/"},
    {"appname":"dzzoffice",    "apphelpurl":"dzzoffice",    "installdr":"/"},
    {"appname":"EspoCRM",    "apphelpurl":"espocrm",    "installdr":"/"},
    {"appname":"Empirecms",    "apphelpurl":"empirecms",    "installdr":"/e/install/"},
    {"appname":"ECSHOP",     "apphelpurl":"ecshop",     "installdr":"/"},
    {"appname":"HDWiki",    "apphelpurl":"hdwiki",    "installdr":"/"},
    {"appname":"Joomla",    "apphelpurl":"joomla",    "installdr":"/"},
    {"appname":"KodExplorer","apphelpurl":"kodexplorer","installdr":"/"},
    {"appname":"Laravel",    "apphelpurl":"laravel",    "installdr":"/"},
    {"appname":"MantisBT","apphelpurl":"mantisbt","installdr":"/"},
    {"appname":"Mediawiki",    "apphelpurl":"mediawiki",    "installdr":"/"},
    {"appname":"Mybb",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"Moodle",    "apphelpurl":"moodle",    "installdr":"/"},
    {"appname":"Magento",    "apphelpurl":"magento",    "installdr":"/"},
    {"appname":"Matomo",    "apphelpurl":"matomo",    "installdr":"/"},
    {"appname":"NextCloud",    "apphelpurl":"nextcloud",    "installdr":"/"},  
    {"appname":"Opencart",    "apphelpurl":"opencart",    "installdr":"/"},
    {"appname":"OwnCloud",    "apphelpurl":"owncloud",    "installdr":"/"},
    {"appname":"OneThink",    "apphelpurl":"onethink",    "installdr":"/"},
    {"appname":"Pydio",    "apphelpurl":"pydio",    "installdr":"/"},
    {"appname":"Prestashop",    "apphelpurl":"prestashop",    "installdr":"/"},
    {"appname":"PHPWind",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"Ranzhi",    "apphelpurl":"ranzhi",    "installdr":"/"},
    {"appname":"ResourceSpace",    "apphelpurl":"resourcespace",    "installdr":"/"},
    {"appname":"SiteFactory",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"SiteServer",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"Symfony",    "apphelpurl":"symfony",    "installdr":"/"},
    {"appname":"SuiteCRM",    "apphelpurl":"suitecrm",    "installdr":"/"},
    {"appname":"ThinkPHP",    "apphelpurl":"thinkphp",    "installdr":"/"},
    {"appname":"ThinkCMF",    "apphelpurl":"thinkcmf",    "installdr":"/"},
    {"appname":"Typecho",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"Testlink",     "apphelpurl":"testlink",     "installdr":"/"},
    {"appname":"VtigerCRM",    "apphelpurl":"vtigercrm",    "installdr":"/"},
    {"appname":"Vanilla",      "apphelpurl":"vanilla",    "installdr":"/"},
    {"appname":"WeCenter",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"WeEngine",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"WordPress",    "apphelpurl":"wordpress",    "installdr":":/"},
    {"appname":"Zentao",    "apphelpurl":"zentao","installdr":"/"},
    {"appname":"Xcart",     "apphelpurl":"cms-else",     "installdr":"/"},
    {"appname":"ZurmoCRM",    "apphelpurl":"zurmocrm",    "installdr":"/"},
  ];
  
  //数据库GUI工具
  var dbtools=[
  {
    "toolname":"phpMyAdmin",
    "db":"MySQL",
    "tooltile":"MySQL数据库管理",
    "toolcontent":"本镜像使用数据库Web管理面板phpMyAdmin来管理Mysql数据库",
    "defaultaccount":"/password.txt",
    "toollink":"/phpmyadmin",
    "displayimage":"images/phpmyadmin.png"
  },
  
  {
    "toolname":"jspMyAdmin",
    "db":"MySQL",
    "tooltile":"MySQL数据库管理",
    "toolcontent":"本镜像使用数据库Web管理面板jspMyAdmin来管理Mysql数据库",
    "defaultaccount":"/password.txt",
    "toollink":"/jspmyadmin",
    "displayimage":"images/jspmyadmin.png"
  },

  {
    "toolname":"pgMyAdmin",
    "db":"PostgreSQL",
    "tooltile":"PostgreSQL数据库管理",
    "toolcontent":"本镜像内置数据库Web管理面板pgMyAdmin来管理PostgreSQL数据库",
    "defaultaccount":"/password.txt",
    "toollink":"/pgmyadmin",
    "displayimage":"images/pgmyadmin.png"
  },

  {
    "toolname":"SQL Server Managerment Studio",
    "db":"SQLServer",
    "tooltile":"SQLServer数据库管理",
    "toolcontent":"本镜像内置SQL Server Managerment Studio(企业管理器)",
    "defaultaccount":"/password.txt",
    "toollink":"#",
    "displayimage":"images/sqlserver.png"
  },

  {
    "toolname":"phpMyAdmin(Docker)",
    "db":"MySQL",
    "tooltile":"MySQL数据库管理Docker版",
    "toolcontent":"本镜像使用数据库Web管理面板phpMyAdmin来管理Mysql数据库",
    "defaultaccount":"/password.txt",
    "toollink":":9090",
    "displayimage":"images/phpmyadmin.png"
  },

  {
    "toolname":"phpPgAdmin(Docker)",
    "db":"PostgreSQL",
    "tooltile":"phpPgAdmin数据库管理",
    "toolcontent":"本镜像内置数据库Web管理面板phpPgAdmin(Docker)来管理PostgreSQL数据库",
    "defaultaccount":"/password.txt",
    "toollink":":9090",
    "displayimage":"images/phppgadmin.png"
  },

  {
    "toolname":"AdminMongo(Docker)",
    "db":"MongoDB",
    "tooltile":"MongoDB数据库管理",
    "toolcontent":"本镜像内置数据库Web管理面板AdminMongo(Docker)来管理PostgreSQL数据库",
    "defaultaccount":"/password.txt",
    "toollink":":9090",
    "displayimage":"images/adminmogo.png"
  },
  {
	"toolname":"dbForge",
    "db":"MySQL",
    "tooltile":"MySQL数据库管理",
    "toolcontent":"本镜像内置数据库管理工具dbForge来管理Mysql数据库",
    "defaultaccount":"/password.txt",
	"toollink":"#",
    "displayimage":"images/dbofrge.png"
  }
  
  ];
  
  //其他工具
  var othertools=[
    {
        "name":"php-fork",
        "tooltitle":"Yahei Explore",
        "toolcontent_zh":"雅黑PHP探针,可以实时查看服务器硬盘资源、内存占用、网卡流量、系统负载、服务器时间等信息",
        "toolcontent_en":"Yahei PHP Explore, you can view server hard disk resources, memory usage, network card traffic, system load, server time and other information in real time.",
        "toollink":"tools/tz.php",
        "toollinkname":"进入工具"
    },
   
    {
        "name":"php-info",
        "tooltitle":"phpinfo()",
        "toolcontent_zh":"查看Apache,PHP完整的配置信息，输出PHP编译选项、PHP版本、扩展组件信息、HTTP 头和PHP授权信息等",
        "toolcontent_en":"View Apache, PHP complete configuration information, output PHP compilation options, PHP version, extension component information, HTTP headers and PHP authorization.",
        "toollink":"tools/phpinfo.php",
        "toollinkname":"进入工具"
    },
  
    {
        "name":"php-opcache",
        "tooltitle":"Opcache",
        "toolcontent_zh":"Opcache面板用于查看Opcache Version、内存使用情况、Cache使用统计等信息，并可以对重置和刷新缓存",
        "toolcontent_en":"Opcache panel is used to view information such as Opcache Version, memory usage, Cache usage statistics, etc., and can reset and refresh the cache.",
        "toollink":"tools/ocp.php",
        "toollinkname":"进入工具"
    }
  ];

//********************JSON数据区 End********************************************** */


//********************多语言区 Start********************************************** */
const messages = {
  zh: {
    message: {

      breadcrumbs_index: '首页',
      breadcrumbs_ftp: '连接云服务器',
      breadcrumbs_db: '数据库管理工具',
      breadcrumbs_tools: '运维工具',

      header_searchURL:'http://support.websoft9.com/',
      header_searchKey:'关键字搜索',
      header_support: '技术支持',
      header_supportmodalTitle: '选择您需的技术支持语种',

      leftmenu_install: '安装说明',
      leftmenu_db: '数据库管理',
      leftmenu_connect: '连接云服务器',
      leftmenu_tools: '小工具',
      leftmenu_documentation: '镜像手册',

      index_welcome: 'Hello, 欢迎使用Websoft9公司提供的镜像!',
      index_install: '已经安装到您的服务器，主要环境组件包括：',
      index_qs: '快速使用：',
      index_ylike: '您可能感兴趣：',
      index_qa11: '9Panel是什么？能改名或删除吗？',
      index_qa12: '9Panel集合数据库管理、文档和支持服务的引导页面，是镜像快速入门的工具。几乎不会占用系统资源，也不会对系统文件进行任何修改。<br>--如果想隐藏9Panel的默认页面，建议将index.html改名；<br>--如果不需要9Panel，请删除9Panel下所有内容，保留空的9Panel文件夹即可',
      index_qa21: '本镜像能够安装多个网站或应用吗？',
      index_qa22: '可以安装多个网站或应用，具体请参考镜像手册',
      index_qa31: '数据库用户和密码是多少？',
      index_qa32: '本镜像中所用到的数据库密码具有唯一性，基于高安全策略自动生成后存放在您的服务器中，您需要连接到您的云服务器中获取密码：<br> --Windows镜像的数据库密码存放路径： 服务器桌面/password.txt<br> --Linux镜像的数据库密码存放路径： /credentials/password.txt',
      index_qa41: '没有域名可以安装网站吗？',
      index_qa42: '如果没有可用域名，可用IP的方式安装网站。但有些软件（例如：WordPress）会将安装路径记录到数据库，将来改成域名访问需要做出修改方可使用',

      install_apps_step1_title:'第一步：获取数据库密码',
      install_apps_step1_content: '访问<a href="db.html">数据库管理</a>页面，获取数据库密码，登录数据库验证可用性',
      install_apps_step2_title:'第二步：域名解析（可选）',
      install_apps_step3_title:'第三步：进入安装向导',

      ftp_content_linux: '本地电脑安装可视化服务器管理工具WinSCP，以SFTP模式连接Linux服务器，就可以获取数据库密码，上传、下载或修改文件、运行Linux命令等',
      ftp_content_windows: '使用本地电脑自带的远程桌面工具，登录到Windows服务器后，与本地之间通过 [拷贝-粘贴] 的方式即可上传文件。如果需要使用FTP工具，需要自行配置',
      ftp_forgetpw: '若忘记了服务器的密码，登录云控制台->服务器-重置密码，重启服务器生效',
      ftp_button_linux: '下载WinSCP',
      ftp_liux_remind: '如果使用macOS，请下载filezilla',
      ftp_button_windows:'深入了解远程桌面',
      ftp_image_linux: '',
      ftp_image_windows:'',
      ftp_getpwbycommand:'图示例：运行 cat /credentials/password.txt 命令，获取数据账号密码',
      ftp_linux_title: '使用云厂商的在线管理终端 或 SSH客户端软件（例如：<a href="https://putty.org/" target="_blank">putty</a>），通过运行命令，也可以获取数据库密码，上传、下载或修改文件',

      db_title: '{dbname}数据库管理',
      db_content: '本镜像包含可视化工具{dbtoolname}，可创建数据库、管理数据库用户、导入导出、运行SQL命令等。',
      db_credentialpath: '数据库密码存放路径：',
      db_loginbutton: '登录{dbtoolname}', 
      db_loginmethod: 'Windows桌面',
      db_windowslogin: '远程桌面到服务器后，',
      db_getdbpw: '不知道账号密码？',
      db_getdbpw2: '数据库账号密码',
      db_getdbpw_content1: '账号密码存放在您的云服务器',
      db_getdbpw_content2: '文件中，<a href="ftp.html" target="_blank">连接到您的云服务器</a>，即可获取',
      db_getdbpw_note: '注意：数据库密码是初装镜像之时，随机生成的高安全密码，请妥善保管',

      tools_loginbutton:'登录{tooltitle}',

      solution_selection1: '方式一：使用SFTP',
      solution_selection2: '方式二：使用命令',

    },

    exmaple:{
      exm_salong:'镜像示例页面',
      exm_feature1:'云计算',
      exm_feature2:'原生开源',
      exm_feature3:'精准知识库',
      exm_feature4:'及时服务',
      exm_feature5:'多语言',
      exm_breadcrumbs:'当前位置: 您的云服务器  /  示例网站首页',
      exm_welcome:'恭喜您，由 <a href="http://www.websoft9.com" target="_blank">Websoft9</a>提供的 {imagename} 镜像已经成功安装到您的服务器',
      exm_to9panel:'自助使用镜像',
      exm_to9panel_b:'进入自助向导',
      exm_helpdesk:'人工支持',
      exm_helpdesk_b:'联系技术支持',

    },

    stepmessage: {
      getdbpw_title:'第一步：获取数据库密码',
      getdbpw_content:'访问<a href="db.html">数据库管理</a>页面，获取数据库密码，登录数据库验证可用性',

      bddomain_title:'第二步：域名绑定（可选）',
      bddomain_content:'若计划使用域名，请务必先解析域名，然后【http://域名/9panel】进入本页面，再继续下一步',

      checkversion_title:'第二步：安装评估',
      checkversion_content:'请根据待安装的网站（或应用程序）对环境版本（操作系统/数据库/语言/应用服务器）的要求进行评估',

      installwizard_title:'第三步：进入安装向导',
      installwizard_content:'安装向导典型流程：软件检查环境->连接数据库->设置后台账号->进入后台',
      installwizard_linkcontent:'进入 {imagename} 安装向导',

      installapps_title:'第三步：安装应用',
      installapps_content:'典型步骤：①上传网站代码->②域名解析（可选）->③修改配置文件->④进入安装向导',
      installapps_linkcontent: '参考 {imagename} 镜像安装文档',

    }
  },
  en: {
    message: {

      breadcrumbs_index: 'Home',
      breadcrumbs_ftp: 'Connect Cloud Server',
      breadcrumbs_db: 'Database GUI',
      breadcrumbs_tools: 'Other Tools',

      header_searchURL:'http://en.websoft9.com/',
      header_searchKey:'',
      header_support: 'Support',
      header_supportmodalTitle: 'Choose your preferred language of Support',

      leftmenu_install: 'Quick Start',
      leftmenu_db: 'Database Management',
      leftmenu_connect: 'Connect Cloud Server',
      leftmenu_tools: 'Other Tools',
      leftmenu_documentation: 'Image Guide',

      index_welcome: 'Hello, Welcome to use image of Websoft9!',
      index_install: 'was installed on your Cloud Server,components included:',
      index_qs: 'Quick Start:',
      index_ylike: 'You may be interesting：',
      index_qa11: 'What is 9Panel?',
      index_qa12: '9Panel is a set of HTML pages for quickly using image of Websoft9. You should delete all the files in 9Panel folder if you do not want to delete 9Panel',
      index_qa21: 'Can this image install multiple websites or apps?',
      index_qa22: 'Multiple websites or applications can be installed. Please refer to the mirror manual for details.',
      index_qa31: 'Username and Password of Database?',
      index_qa32: 'The database password used in this image is unique. It is automatically generated based on a high security policy and stored on your server. You need to connect to your cloud server to get the password: <br>--Windows image database password file path: Desktop of Server/password.txt <br> --Linux image database password file path: /credentials/password.txt',
      index_qa41: 'Can I install a website without a domain name?',
      index_qa42: 'If no domain name is available, the website can be installed by IP. However, some software (for example, WordPress) will record the installation path to the database. In the future, the domain name access needs to be modified before it can be used.',
    
      ftp_content_linux: 'You can use WinSCP on your local computer, WinSCP is an open source free SFTP client for Windows. Its main function is file transfer between a local and a remote computer.',
      ftp_content_windows: 'You can log in to the Windows server using the remote desktop tool that comes with your local computer. You can upload files by copy-paste after the remote desktop. If you need to use the FTP tool, you need to configure it yourself.',
      ftp_forgetpw: 'Do not remember the password of Cloud Server? Log in to Cloud Console->Server->Reset Password,Restart the server to take effect',
      ftp_button_linux: 'Download WinSCP',
      ftp_liux_remind: 'If you are using macOS,suggest using Filezilla',
      ftp_button_windows:'Learn more about remote desktops',
      ftp_image_linux: '',
      ftp_image_windows:'',
      ftp_getpwbycommand:'Picture: Get database password by command',
      ftp_linux_title: 'Use the cloud console online management terminal or SSH client software (for example: <a href="https://putty.org/" target="_blank">putty</a>) to get the database by running the command. Password, upload, download or modify file',

      db_title: '{dbname} Management',
      db_content: 'This image includes GUI tool {dbtoolname} to manage Database',
      db_credentialpath: 'Password acquisition path:',
      db_loginbutton: 'Login {dbtoolname}', 
      db_loginmethod: 'Windows Desktop',
      db_windowslogin: 'Remote log in to Windows,then',
      db_getdbpw: 'Not have username and password?',
      db_getdbpw2: 'Database username and password',
      db_getdbpw_content1: 'The account password is stored in your cloud server',
      db_getdbpw_content2:'file, <a href="ftp.html" target="_blank">connect to your cloud server</a>, you can get it ',
      db_getdbpw_note: 'Note: The database password is a randomly generated high security password when the image is first installed. Please keep it safe.',

      tools_loginbutton:'Login {tooltitle}',

      solution_selection1: 'Method 1: Using SFTP',
      solution_selection2: 'Method 2: Using Command',
  
    },
    exmaple:{
      exm_salong:'Sample Page',
      exm_feature1:'Cloud Computing',
      exm_feature2:'Open Source',
      exm_feature3:'Documentation',
      exm_feature4:'Instant Support',
      exm_feature5:'Multi-language',
      exm_breadcrumbs:'You are here: Your cloud server / Sample website home page',
      exm_welcome:'The image  {imagename} powered by <a href="http://www.websoft9.com" target="_blank">Websoft9</a> was installed on your Cloud Server',
      exm_to9panel:'Self-service',
      exm_to9panel_b:'Go to Self-service',
      exm_helpdesk:'Helpdesk',
      exm_helpdesk_b:'Go to helpdesk',

    },
    stepmessage: {

      getdbpw_title:'Step1: Get the Database Password',
      getdbpw_content:'Go to <a href="db.html">DB GUI</a> page, get the password of database, then log in to database, test and verify it',

      bddomain_title:'Step2: DNS(not necessary)',
      bddomain_content:'Once you have completed the DNS, please reload 9Panel by http://youdomain/9panel, then go to next step',

      checkversion_title:'Step2: Environment check',
      checkversion_content:'Please check the requirements of the environment version (operating system/database/language/application server) according to your apps',

      installwizard_title:'Step3: Installation Wizard',
      installwizard_content:'Installation wizard typical configuration process: check environment -> connect database -> set account',
      installwizard_linkcontent:'{imagename} Installation Wizard',

      installapps_title:'Step3: Add application',
      installapps_content:'Typical steps: 1 upload website code -> 2 domain name resolution (optional) -> 3 modify configuration file -> 4 enter the installation wizard',
      installapps_linkcontent: 'Visit {imagename} Image Guide',

    }
  }
}

//********************多语言区 End********************************************** */

//获取环境的ID号
var get_indexID=IndexOf_websoft9stack(set_infrastructure);

//获取apps的ID号，通过IndexOf_appslist函数赋值
var get_index_appsID=new Array();

var get_dbtoolsID=new Array();
IndexOf_dbtools(websoft9stack[get_indexID].databasetool);

get_othertoolsID=new Array();
if (websoft9stack[get_indexID].tools !="")
{
  IndexOf_othertools(websoft9stack[get_indexID].tools);
}


//获取apps的安装向导路径（一般是绝对路径，少量镜像带path或端口号，第二个应用开始为/appname）
var get_appsInstallPath=new Array();

//如果不是基础镜像，便可以获取apps的ID号，通过IndexOf_tools函数赋值
if(set_apps[0]!="Example"){
  IndexOf_appslist(set_apps);
  }


//获取基础环境文档链接名称
var infr_document_path=websoft9stack[get_indexID].helpurl;

//获取应用软件链接(只返回第一个应用的链接名称，非网址)
var apps_document_path='';

//如果不是基础环境，方可调用apps相关函数，否则报错
if(set_apps[0]!="Example"){
apps_document_path=appslist[get_index_appsID[0]].apphelpurl;

for(i=0;i<set_apps.length;i++){
  if(i==0)
  {
    get_appsInstallPath[i]='http://'+window.location.hostname+appslist[get_index_appsID[i]].installdr;
  }
  else
  {
    get_appsInstallPath[i]='http://'+window.location.hostname +'/'+ appslist[get_index_appsID[i]].appname.toLowerCase();
  }
  
}

}

//9Panel中的唯一镜像文档
var leftmenu_document_url='';

//获取浏览器语言
const NavigatorLang = (navigator.language || navigator.userLanguage).substr(0, 2);

//语言全局变量
var Global_languagetype=NavigatorLang;

//设置title标签内容

if (Global_languagetype=='zh')
{
  document.title = '9Panel-用于Websoft9镜像的快速入门小工具';
}
else
{
  document.title = '9Panel-Quick Start Gadget for Websoft9 images';
}


// Create VueI18n instance with options
const i18n = new VueI18n({
locale: NavigatorLang, // set locale zh or en
messages, // set locale messages
})

//首页欢迎区的镜像组件说明
Vue.component('displayindexcomponents',{
  template:`
  <div class="jumbotron">
  <h1 class="title-1">{{ $t("message.index_welcome") }}</h1>
  <p><b>{{ indeximages_name() }}</b> {{ $t("message.index_install") }} {{ indexcomponents_name() }}</p>                     
  </div>
  `,

  methods:{

    indeximages_name: function() {
      if(get_index_appsID==''){
        return set_infrastructure;
      }
      else
      {
       return set_apps + ' On '+ set_infrastructure;
      }
      
    },

    indexcomponents_name: function() {
      return websoft9stack[get_indexID].os +','+ websoft9stack[get_indexID].httpserver + ','+websoft9stack[get_indexID].language +','+ websoft9stack[get_indexID].database + ','+ websoft9stack[get_indexID].databasetool;
      
    },
  
  },
})

//9Panle的头部header组件(组件名称不能大写)
Vue.component('panelheader', {
  template: `
  <header class="header-desktop">
    <div class="section__content section__content--p30">
        <div class="container-fluid">
            <div class="header-wrap">
                <form class="form-header" v-bind:action="set_searchpurl()" method="Get">
                    <input class="au-input au-input--xl" type="text" name="s" placeholder="Search" />
                    <button class="au-btn--submit" type="submit">
                        <i class="zmdi zmdi-search"></i>
                    </button>
                </form>
                <div class="content">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                            <a  data-toggle="modal" data-target="#modalsupport" class="js-acc-btn" href="#">{{ $t("message.header_support") }}</a>
                            </div>
                
                <div class="header-button">
                    <div class="account-wrap">
                        <div>
                        <div class="content">
                        <i class="fa fa-globe" aria-hidden="true"></i>          
                        <a class="js-acc-btn" href="#" v-on:click="HeaderHandler_Setlanuage('en')">English</a> | <a class="js-acc-btn" href="#" v-on:click="HeaderHandler_Setlanuage('zh')">中文</a>
                        </div>   
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`,
methods: {
  HeaderHandler_Setlanuage: function (str) {
    
    Global_languagetype=str;
    this.$i18n.locale = str;
    
  },

  //设置搜索链接
  set_searchpurl: function(){

    if (this.$i18n.locale=='zh')
    {
     return 'http://support.websoft9.com/kbtopic/usecloud/';
    }
    else
     return 'https://en.websoft9.com/';
 },
},
})

//点击“技术支持”后的弹出对话框
Vue.component('modalsupport', {
  template: `
  <div class="modal fade" id="modalsupport" tabindex="-900" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">{{ $t("message.header_supportmodalTitle") }}</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div class="modal-footer">
        <a href="https://en.websoft9.com/support/" target="_blank" role="button" class="btn btn-light">English</a>
        <a href="http://support.websoft9.com" target="_blank" role="button" class="btn btn-danger" >中文</a>
      </div>
    </div>
  </div>
</div>
  `
})

//9Panel菜单组件
Vue.component('panelleftmenu', {
  template: `
<ul class="list-unstyled navbar__list">                             
<li v-bind:class="menunow('index.html')"><a href="index.html"><i class="fas fa-tachometer-alt"></i>{{$t("message.leftmenu_install") }}</a></li>                             
<li v-bind:class="menunow('db.html')"><a href="db.html"><i class="fas fa-database"></i> {{ $t("message.leftmenu_db") }}</a></li>                             
<li v-bind:class="menunow('ftp.html')"><a href="ftp.html"><i class="fas fa-folder-open"></i>{{ $t("message.leftmenu_connect") }}</a></li>                            
<li v-bind:class="menunow('tools.html')"><a href="tools.html"><i class="fas fa-gavel"></i>{{ $t("message.leftmenu_tools") }}</a></li> 
<li> <a v-bind:href="get_helpurl()" class="js-acc-btn"  target="_blank"><i class="fas fa-print"></i>{{ get_imagename() }} {{ $t("message.leftmenu_documentation") }}</a></li>                            
<li> <a v-bind:href="set_faqpurl()" target="_blank"><i class="fas fa-question-circle"></i>FAQ</a></li>                        
</ul>
  `,
  methods: {
    //获取用于显示在菜单-文档上的镜像名称
    get_imagename: function() {
      if (set_apps[0]=='Example')
      {
        return set_infrastructure;
      }
      else
        return set_apps[0];
    },

    //获取中英文档链接
    get_helpurl: function(){

     if (this.$i18n.locale=='zh')
     {
      leftmenu_document_url='http://support.websoft9.com/docs/'+set_leftmenu_link()+'-image-guide';      
     }
     else
     {
      leftmenu_document_url='http://en.websoft9.com/docs/'+set_leftmenu_link();      
     }
     return leftmenu_document_url;     
    },

   //设置FAQ链接
    set_faqpurl: function(){

    if (this.$i18n.locale=='zh')
    {
     return 'http://support.websoft9.com/kbtopic/usecloud/';
    }
    else
    return 'https://en.websoft9.com/docs/cloud/';
    },

     //让菜单中当前页面为蓝色
     menunow: function (nowhtml){     
       var thisurl=location.pathname;
      if (thisurl.match(nowhtml)!=null)
      {
        return "active" ;
      }
    }
    
  }
})


//镜像的QuikStart for apps步骤
Vue.component('installappssteps',{
  template: `
  <div class="row">

   <div class="col-lg-4" id="step1"> 
    <div class="au-card recent-report"> 
     <div class="au-card-inner"> 
      <a class="title-9"><i class="fas fa-arrow-circle-right"></i> {{ $t("stepmessage.getdbpw_title") }}</a>
      <br /> 
      <div class="alert info alert" role="alert"> 
      <p v-html="$t('stepmessage.getdbpw_content')"></p>
      </div> 
      <img src="images/databasesecurity.png" class="rounded mx-auto d-block" /> 
      <div style="display:none" id="stepnamediv" class="au-task__footer"> 
      </div> 
     </div> 
    </div> 
   </div>

   <div class="col-lg-4" id="step2"> 
   <div class="au-card recent-report"> 
    <div class="au-card-inner"> 
     <a class="title-9"><i class="fas fa-arrow-circle-right"></i> {{ $t('stepmessage.bddomain_title') }}</a>
     <br /> 
     <div class="alert info alert" role="alert"> 
     <p v-html="$t('stepmessage.bddomain_content')"></p>
     </div> 
     <img src="images/domain.png" class="rounded mx-auto d-block" /> 
     <div style="display:none" id="stepnamediv" class="au-task__footer"> 
     </div> 
    </div> 
   </div> 
  </div>

  <div class="col-lg-4" id="step2"> 
  <div class="au-card recent-report"> 
   <div class="au-card-inner"> 
    <a class="title-9"><i class="fas fa-arrow-circle-right"></i> {{ $t('stepmessage.installwizard_title') }}</a>
    <br /> 
    <div class="alert info alert" role="alert"> 
    <p v-html="$t('stepmessage.installwizard_content')"></p>
    </div> 
    <img src="images/install003.png" class="rounded mx-auto d-block" /><br>
 
    <a v-if="true" class="btn btn-warning btn-lg btn-block" v-bind:href="get_appsInstallPath[0]" target="_blank" role="button"> {{ $t('stepmessage.installwizard_linkcontent', { imagename: set_apps[0] }) }}</a>
    <a v-if="set_apps[1]!=null" class="btn btn-warning btn-lg btn-block" v-bind:href="get_appsInstallPath[1]" target="_blank" role="button"> {{ $t('stepmessage.installwizard_linkcontent', { imagename: set_apps[1] }) }}</a>
    
   </div> 
  </div> 
 </div>

 

   </div>

   
    `,

    methods: {

    }
})

//镜像的QuikStart for infra步骤
Vue.component('installsteps',{
  template: `
  <div class="row">

   <div class="col-lg-4" id="step1"> 
    <div class="au-card recent-report"> 
     <div class="au-card-inner"> 
      <a class="title-9"><i class="fas fa-arrow-circle-right"></i> {{ $t("stepmessage.getdbpw_title") }}</a>
      <br /> 
      <div class="alert info alert" role="alert"> 
      <p v-html="$t('stepmessage.getdbpw_content')"></p>
      </div> 
      <img src="images/databasesecurity.png" class="rounded mx-auto d-block" /> 
      <div style="display:none" id="stepnamediv" class="au-task__footer"> 
      </div> 
     </div> 
    </div> 
   </div>

   <div class="col-lg-4" id="step2"> 
   <div class="au-card recent-report"> 
    <div class="au-card-inner"> 
     <a class="title-9"><i class="fas fa-arrow-circle-right"></i> {{ $t('stepmessage.checkversion_title') }}</a>
     <br /> 
     <div class="alert info alert" role="alert"> 
     <p v-html="$t('stepmessage.checkversion_content')"></p>
     </div> 
     <img src="images/checkit.png" class="rounded mx-auto d-block" /> 
     <div style="display:none" id="stepnamediv" class="au-task__footer"> 
     </div> 
    </div> 
   </div> 
  </div>

  <div class="col-lg-4" id="step2"> 
  <div class="au-card recent-report"> 
   <div class="au-card-inner"> 
    <a class="title-9"><i class="fas fa-arrow-circle-right"></i> {{ $t('stepmessage.installapps_title') }}</a>
    <br /> 
    <div class="alert info alert" role="alert"> 
    <p v-html="$t('stepmessage.installapps_content')"></p>
    </div> 
    <img src="images/install003.png" class="rounded mx-auto d-block" /><br>
    <a class="btn btn-warning btn-lg btn-block" v-bind:href="leftmenu_document_url" target="_blank" role="button"> {{ $t('stepmessage.installapps_linkcontent', { imagename: set_infrastructure }) }}</a>
    </div> 
   </div> 
  </div> 
 </div>

 

   </div>

   
    `,

    methods: {

    }
})

othertools;

//其他工具
Vue.component('othertools',{
  props: ['toolslist'],

  data: function () {
    return {
      tooltitle: othertools[this.toolslist].tooltitle,
      toollink:othertools[this.toolslist].toollink,
      toolcontent_zh: othertools[this.toolslist].toolcontent_zh,
      toolcontent_en: othertools[this.toolslist].toolcontent_en,
      islinux:boolean_ostype(),
    }
  },

  template: `
  <div class="col-lg-4"> 
  <div class="au-card recent-report"> 
   <div class="au-card-inner"> 
    <h3 class="title-2"><i class="fas fa-gavel"></i> {{ tooltitle }}</h3>
    <br /> 
    <div class="alert alert-success" role="alert"> 
     <p v-if="Global_languagetype=='zh'" class="lead"> {{ toolcontent_zh }}</p> 
     <p v-if="Global_languagetype=='en'" class="lead"> {{ toolcontent_en }}</p> 
    </div> 
    <div class="au-task__footer"> 
     <a class="btn btn-success" v-bind:href="toollink" target="_blank" role="button"> {{ $t('message.tools_loginbutton',{tooltitle}) }}</a> 
    </div> 
   </div> 
  </div> 
 </div>
  
    `,

    methods: {

    }
})

//数据库GUI工具
Vue.component('databasegui',{

  props: ['dblist'],
 
  data: function () {
    return {
      dbname: dbtools[this.dblist].db,
      dbtoolname: dbtools[this.dblist].toolname,
      pwpath: dbtools[this.dblist].defaultaccount,
      dbtoollink:'http://'+window.location.hostname +dbtools[this.dblist].toollink,
      islinux:boolean_ostype(),
    }
  },
  
  template: `
  <div class="col-lg-6"> 
  <div class="au-card recent-report"> 
   <div class="au-card-inner"> 
    <h3 class="title-2"><i class="fas fa-database"></i> {{ $t('message.db_title',{dbname}) }} </h3>
    <hr class="line-seprate">
    <br /> 
    <div> 
     <p class="lead" v-html="$t('message.db_content',{dbtoolname})">  </p> 
     
    </div> 
    <div class="au-task__footer"> 
     <a v-if="dbtools[this.dblist].toollink=='#'" class="btn btn-primary btn-lg btn-block text-light"  role="button">{{ $t('message.db_windowslogin') }} {{ $t('message.db_loginbutton',{dbtoolname}) }}  </a> 
     <a v-else class="btn btn-warning btn-lg btn-block" v-bind:href="dbtoollink" target="_blank" role="button"> {{ $t('message.db_loginbutton',{dbtoolname}) }}</a>
     
     <div>
     <p class="text-right"> 
     <br>
     <a data-toggle="modal" data-target="#modaldbpassword" href="#" class="js-acc-btn text-muted ">{{$t('message.db_getdbpw')}}</a>
     </p>
     </div>
     
    </div> 

   </div> 
  </div> 
 </div>
  
    `,
    methods: {
  
    }
})



//点击“不知道账号密码”后的弹出对话框
Vue.component('modaldbpassword', {
  data: function () {
    return {
      pwpath_linux:'/credentials',
      pwpath_windows:'桌面',
      islinux:boolean_ostype(),
    }
  },
  
  template: `
<div class="modal fade bd-example-modal-lg" id="modaldbpassword" tabindex="-900" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{$t('message.db_getdbpw2')}}</h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>
      <span>{{ $t('message.db_getdbpw_content1') }}</span>
      <b>
      <span v-if="islinux">/credentials/password.txt</span>
      <span v-else>{{ $t('message.db_loginmethod') }}/password.txt</span>
      </b>
      <span v-html="$t('message.db_getdbpw_content2')"></span>
      </p>
      <br>
      <div class="alert alert-warning" role="alert">
      {{ $t('message.db_getdbpw_note') }}
      </div>
      </div>
    </div>
  </div>
</div>
  `,
  methods: {

  }
  
})


//vue.js主实例
var VueJsDisplay=new Vue({
  el: '#vuejsdisplay',
  i18n,
  data: {
    //用于html v-if控制
    isinfrastructure:boolean_imagetype(),
    islinux:boolean_ostype(),
    //isinfrastructure2:true,
  },
  methods: {

  }
  
})


//*****************基本通用函数 Start****************************** */

  //获取websoft9stacks镜像的编号
function IndexOf_websoft9stack(str_stackname){
  var j=0;
  for(i=0;i<websoft9stack.length;i++)
  {
    if (websoft9stack[i].name==str_stackname)
    {
      j++;
      return i;
    }
  }
  //检索没有发现环境，提示应用不存在
  if(j==0)
  {
    alert("基础环境名称不存在，请仔细检查！");
  }

  }

//获取apps的编号（组合镜像最多有2个编号）
function IndexOf_appslist(str_appname){
    var j=0;
    for(i=0;i<appslist.length;i++)
    {
      //apps匹配
      if (str_appname.indexOf(appslist[i].appname) != -1)
      {
        get_index_appsID[j]=i;
        j++;
      }      
    };

    //检索没有发现应用，提示应用不存在
    if(j==0)
      {
        alert("应用名称不存在，请仔细检查！");
      }
    
  }

//获取dbtools的编号
function IndexOf_dbtools(str){
  var j=0;
  for(i=0;i<dbtools.length;i++)
  {
    //apps匹配
    if (str.indexOf(dbtools[i].toolname) != -1)
    {
      get_dbtoolsID[j]=i;
      j++;
    }      
  };

  //检索没有发现应用，提示应用不存在
  if(j==0)
    {
      alert("数据库GUI名称不存在，请仔细检查！");
    }
  
}


//获取othertools的编号
function IndexOf_othertools(str){
  var j=0;
  for(i=0;i<othertools.length;i++)
  {
    //apps匹配
    if (str.indexOf(othertools[i].name) != -1)
    {
      get_othertoolsID[j]=i;
      j++;
    }      
  };

  //检索没有发现应用，提示应用不存在
  if(j==0)
    {
      alert("小工具名称不存在，请仔细检查！");
    }
  
}

//设置左侧菜单文档链接：当有apps的时候，采用首个app的文档链接
function set_leftmenu_link()
{
  if (set_apps[0]=="Example"){    
    return infr_document_path;
  }
  else
  {
    return apps_document_path;
  }
    
}

//反馈镜像类型，true为基础环境镜像，false为应用镜像
function boolean_imagetype() {
      if (set_apps[0]=="Example"){
        return true;
      }
      else 
      {
        return false;
      }

    }

//反馈镜像操作系统类型，true为Linux
function boolean_ostype(){
  if (websoft9stack[get_indexID].os=="Linux"){
    //alert("true");
    return true;
  }
  else 
  {
    //alert("false");
    return false;
  }

}

//*****************基本通用函数 End****************************** */
