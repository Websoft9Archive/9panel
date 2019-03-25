/*!
  * 本文件定义9panel中所需的变量、对象和函数
  * 本文件动态输出功能块
  */
//
  
//分别定义Stack的属性，switch为开关，0代表不显示，1代表显示；
//database,databasetool等采用数组类型，满足多数据库镜像的显示
//如果镜像没有运维工具，语法为："tools":[],
//如果是apps是组合类镜像（例如：WordPress&Discuz），务必将installdr更改为组合类对应安装路径abc

var appslist=[
    {"appname":"MantisBT","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/mantisbt-image-guide/","installdr":"/"},
    {"appname":"Zentao（禅道）","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/zentaopms-image-guide/","installdr":"/"},
    {"appname":"DzzOffice","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/dzzoffice-image-guide/","installdr":"/"},
    {"appname":"KodCloud（可道云）","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/kodexplorer-image-guide/","installdr":"/"},
    {"appname":"NextCloud","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/nextcloud-image-guide/","installdr":"/"},
    {"appname":"OwnCloud","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/owncloud-image-guide/","installdr":"/"},
    {"appname":"Pydio","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/pydio-image-guide/","installdr":"/"},
    {"appname":"ResourceSpace","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/resourcespace-image-guide/","installdr":"/"},
    {"appname":"Dolibarr","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/dolibarr-image-guide/","installdr":"/"},
    {"appname":"EspoCRM","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/espocrm-image-guide/","installdr":"/"},
    {"appname":"Ranzhi(然之协同)","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/ranzhi-image-guide/","installdr":"/"},
    {"appname":"SuiteCRM","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/suitecrm-image-guide/","installdr":"/"},
    {"appname":"VtigerCRM","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/vtigercrm-image-guide/","installdr":"/"},
    {"appname":"ZurmoCRM","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/zurmocrm-image-guide/","installdr":"/"},
    {"appname":"WordPress","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/wordpress-image-guide/","installdr":"/"},
    {"appname":"Discuz","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/discuz-image-guide/","installdr":"/"},
    {"appname":"Drupal","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/drupal-image-guide/","installdr":"/"},
    {"appname":"Empirecms(帝国)","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/empirecms-image-guide/","installdr":"/e/install/"},
    {"appname":"Joomla","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/joomla-image-guide/","installdr":"/"},
    {"appname":"HDWiki","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/hdwiki-image-guide/","installdr":"/"},
    {"appname":"Mediawiki","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/mediawiki-image-guidel/","installdr":"/"},
    {"appname":"Moodle","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/moodle-image-guide/","installdr":"/"},
    {"appname":"Magento","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/magento-image-guide/","installdr":"/"},
    {"appname":"Opencart","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/opencart-image-guide/","installdr":"/"},
    {"appname":"Prestashop","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/prestashop-image-guide/","installdr":"/"},
    {"appname":"chanzhiESP","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"CmsEasy","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"Mybb","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"PHPWind","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"SiteFactory","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"SiteServer","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"WeCenter","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"WeEngine(微擎)","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"Xcart","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"Typecho","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/cms-else/","installdr":"/"},
    {"appname":"ECSHOP","switch":0,
     "apphelpurl":"http://support.websoft9.com/docs/ecshop-image-guide/","installdr":"/"},
    {"appname":"ThinkPHP","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/thinkphp-image-guide/","installdr":"/"},
    {"appname":"ThinkCMF","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/thinkcmf-image-guide/","installdr":"/"},
    {"appname":"Laravel","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/laravel-image-guide/","installdr":"/"},
    {"appname":"Symfony","switch":0,
    "apphelpurl":"http://support.websoft9.com/docs/symfony-image-guide/","installdr":"/"},
];


 var websoft9stack=
 [
    {
    "name":"LAMP","switch":0,
    "apps":appslist,
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/lamp-image-guide"
},

{
    "name":"LNMP","switch":0,
    "apps":appslist,
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/lnmp-image-guide"
},

{
    "name":"LCMP","switch":0,
    "apps":appslist,
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Caddy"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/lcmp-image-guide"
},

{
    "name":"LNMT","switch":0,
    "apps":appslist,
    "language":["PHP","Java"],
    "os":"Linux",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx","Tomcat"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/lnmt-image-guide"
},

{
    "name":"LANMP","switch":0,
    "apps":appslist,
    "language":["PHP"],
    "os":"Linux",
    "database":["MySQL","MariaDB"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx","Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/lanmp-image-guide/"
},

{
    "name":"Java on Tomcat","switch":0,
    "apps":appslist,
    "language":["Java"],
    "os":"Linux",
    "database":["MySQL","MariaDB"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx","Tomcat"],
    "tools":"",
    "helpurl":"http://support.websoft9.com/docs/java-tomcat-image-guide/"
},

{
    "name":"Java on Tomcat","switch":0,
    "apps":appslist,
    "language":["Java"],
    "os":"Windows",
    "database":["MySQL","MariaDB"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Nginx","Tomcat"],
    "tools":"",
    "helpurl":"http://support.websoft9.com/docs/java-tomcat-image-guide/"
},

{
    "name":"WAMP","switch":0,
    "apps":appslist,
    "language":["PHP"],
    "os":"Windows",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/wamp-image-guide"
},

{
    "name":"WAMPServer","switch":0,
    "apps":appslist,
    "language":["PHP"],
    "os":"Windows",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Apache"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/wamp-image-guide"
},

{
    "name":"XAMPP","switch":0,
    "apps":appslist,
    "language":["PHP","JAVA"],
    "os":"Windows",
    "database":["MySQL"],
    "databasetool":["phpMyAdmin"],
    "httpserver":["Apache","Tomcat"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/xampp-image-guide"
},

{
    "name":"IIS全能","switch":0,
    "apps":appslist,
    "language":["PHP",".NET","Java"],
    "os":"Windows",
    "database":["MySQL","SQLServer Express"],
    "databasetool":["phpMyAdmin","SQL Server Managerment Studio"],
    "httpserver":["IIS","Tomcat"],
    "tools":["php-fork","php-info","php-opcache"],
    "helpurl":"http://support.websoft9.com/docs/windows-iis-image-guide/"
},

{
    "name":".NET","switch":0,
    "apps":appslist,
    "language":[".NET"],
    "os":"Windows",
    "database":["MySQL","SQLServer Express"],
    "databasetool":["phpMyAdmin","SQL Server Managerment Studio"],
    "httpserver":["IIS"],
    "tools":"",
    "helpurl":"http://support.websoft9.com/docs/windows-iis-image-guide/"
},

{
    "name":"PHP ON IIS","switch":0,
    "apps":appslist,
    "language":["PHP",".NET"],
    "os":"Windows",
    "database":["MySQL","SQLServer Express"],
    "databasetool":["phpMyAdmin","SQL Server Managerment Studio"],
    "httpserver":["IIS"],
    "tools":"",
    "helpurl":"http://support.websoft9.com/docs/windows-iis-image-guide/"
},
 
];

//根据镜像类型选择对应的三步骤
var stepsdisplay=
[
{
    "steptype":"apps",
    "steps":[
        {"stepname":"第一步：修改数据库密码","stepcontent":"为了保障您的数据安全，请在进入安装向导之前<a href='db.html'>修改【数据库管理员】密码</a>，数据安全是最需要重视的问题","steplinkname":"管理数据库","steplink":"db.html","stepimage":"images/databasesecurity.png"},
        {"stepname":"第二步：域名解析（可选）","stepcontent":"若计划使用域名，请务必先解析域名，然后【通过域名访问的方式进入安装向导】","steplinkname":"马上","steplink":null,"stepimage":"images/domain.png"},
        {"stepname":"第三步：进入安装向导","stepcontent":"安装向导典型流程：检查环境->连接数据库->设置后台账号->进入后台","steplinkname":"进入安装向导","steplink":null,"stepimage":"images/install003.png"}
    ],
},

{
    "steptype":"infrastructure",
    "steps":[
        {"stepname":"第一步：修改数据库密码","stepcontent":"为了保障您的数据安全，请在进入安装向导之前<a href='db.html'>修改【数据库管理员】密码</a>，数据安全是最需要重视的问题","steplinkname":"管理数据库","steplink":"db.html","stepimage":"images/databasesecurity.png"},
        {"stepname":"第二步：环境匹配检查","stepcontent":"请根据待安装的网站（或应用程序）对环境版本（操作系统/数据库/语言/应用服务器）的要求进行检查，以免做无用功","steplinkname":"马上","steplink":null,"stepimage":"images/checkit.png"},
        {"stepname":"第三步：安装网站","stepcontent":"典型步骤：①上传网站代码->②域名解析（可选）->③修改配置文件->④安装向导","steplinkname":"打开安装指导文档","steplink":null,"stepimage":"images/install003.png"}
    ],
},
];


//显示个性化首页
function DisplayIndexPage()
{
  //显示左侧菜单值
  DisplayLeftMenu();
  for(i=0;i<websoft9stack.length;i++)
  {
     if (websoft9stack[i].switch==1)
     {
        //显示欢迎页面
        DisplayWelcome(websoft9stack[i]); 
        //根据是否开启apps，来选择对应的快速入门三步骤
    
        var installtypestr;
        var installdrstr=new Array();
        var stacknamestr=new Array();
        var appscount=-1;
        for(j=0;j<websoft9stack[i].apps.length;j++)
         {
           
            if(websoft9stack[i].apps[j].switch==1)
            {
              installtypestr="apps";
              appscount++;
              installdrstr[appscount]=websoft9stack[i].apps[j].installdr;
              stacknamestr[appscount]=websoft9stack[i].apps[j].appname;
            } 
            
         }

         if (appscount<0)
         {
             //如果是基础环境，安装step3显示的链接为文档地址
              installtypestr="infrastructure";
              installdrstr[0]=websoft9stack[i].helpurl;
              stacknamestr[0]=websoft9stack[i].name;
         }
         DisplayInstallSteps(installtypestr,installdrstr,stacknamestr);
        
     }
  }
   
}

//显示示例页面
function DisplayExamplePage()
{
  for(i=0;i<websoft9stack.length;i++)
  {
     if (websoft9stack[i].switch==1)
     {
        //显示示例页面名称
        y=document.getElementById("displaywelcomeofexample");
        y.innerHTML=websoft9stack[i].name;

     }
  }
   
}

//显示远程与FTP页面
function DisplayFTPPage()
{
for(i=0;i<websoft9stack.length;i++)
{
    if (websoft9stack[i].switch==1)
    {
        //根据操作系统情况，关闭非当前显示项
        if(websoft9stack[i].os=="Windows")
        {
            document.getElementById("linuxlogin").style.display="none";//隐藏
        }
        else
            document.getElementById("windowslogin").style.display="none";//隐藏
        
    }
}
    //显示左侧菜单值
    DisplayLeftMenu();
}

//显示数据库页面
function DisplayDBPage()
{
    for(i=0;i<websoft9stack.length;i++)
{
    if (websoft9stack[i].switch==1)
    {
        //分别显示数据库工具
        for(j=0;j<websoft9stack[i].databasetool.length;j++)
        {
            DisplayDatabaseTools(websoft9stack[i].databasetool[j]);
        }
        
    }
}
    //显示左侧菜单值
    DisplayLeftMenu();
}

//显示工具页面
function DisplayOtherToolsPage()
{
    for(i=0;i<websoft9stack.length;i++)
{
    if (websoft9stack[i].switch==1)
    {
        //分别显示其他工具
        for(j=0;j<websoft9stack[i].tools.length;j++)
        {
            if(websoft9stack[i].tools!=null)
            {
                DisplayOtherTools(websoft9stack[i].tools[j]);
            }
            
        }
        
    }
}
    //显示左侧菜单值
    DisplayLeftMenu();
}

//........................子函数...........................................

//显示欢迎信息
 function DisplayWelcome(w9stack)
 {

    var stacknametile=w9stack.name;
    var appstitle=[];
    var appcount=-1;
    for(j=0;j<w9stack.apps.length;j++)
    {
        
        if(w9stack.apps[j].switch==1)
        {
          appcount++;
          appstitle[appcount]=w9stack.apps[j].appname;
          
          //break;
        }
        else if(w9stack.apps[j].switch==0)
        {
          continue;
        }
          
    } 

    //根据appcount的值判断：基础环境、单一应用、组合应用
    if (appcount>=1)
    {
        stacknametile=appstitle+" <u>组合类</u> "+"（"+w9stack.name+"）";
    }

    if(appcount==0)
    {
        stacknametile=appstitle+"（"+w9stack.name+"）";
    }

    welcomemesage="您安装的是"+stacknametile+"镜像，"+"主要环境组件包括："+w9stack.os+","+w9stack.httpserver+","+w9stack.language+","+w9stack.database+","+w9stack.databasetool;
    
    
    x=document.getElementById("displaywelcome");
    x.innerHTML=welcomemesage;
 }

 

 //显示菜单

 function DisplayLeftMenu()
 {
    for(i=0;i<websoft9stack.length;i++)
    {
        if (websoft9stack[i].switch==1)
        {
            //显示左侧菜单值
            var docurl;
            for(j=0;j<websoft9stack[i].apps.length;j++)
            {
                
                if(websoft9stack[i].apps[j].switch==1)
                {
                  docurl=websoft9stack[i].apps[j].apphelpurl;
                  break;
                }
                else if(websoft9stack[i].apps[j].switch==0)
                {
                  docurl=websoft9stack[i].helpurl;
                  continue;
                }
                  
            } 
            
        }
    }

    //var menunow="active";
   // var thisurl=location.pathname;
//

    
    var leftmenu=" <ul class=\'list-unstyled navbar__list\'>"+
    "                             <li class=\'"+menunow('index.html')+"\'>"+
    "                                <a href=\'index.html\'>"+
    "                                <i class=\'fas fa-tachometer-alt\'></i>安装说明</a>"+
    "                            </li>"+
    "                             <li class=\'"+menunow('db.html')+"\'>"+
    "                                <a href=\'db.html\'>"+
    "                                <i class=\'fas fa-database\'></i>数据库管理</a>"+
    "                            </li>"+
    "                             <li class=\'"+menunow('ftp.html')+"\'>"+
    "                                <a href=\'ftp.html\'>"+
    "                                <i class=\'fas fa-folder-open\'></i>远程连接与FTP</a>"+
    "                            </li>"+
    "                            <li class=\'"+menunow('tools.html')+"\'>"+
    "                                <a href=\'tools.html\'>"+
    "                                <i class=\'fas fa-gavel\'></i>工具</a>"+
    "                            </li>"+
    "                            <li>"+
    "                                <a href=\'"+docurl+"\' target=\'_blank\'>"+
    "                                <i class=\'fas fa-book\'></i>镜像手册</a>"+
    "                            </li>"+
    "                            <li>"+
    "                                <a href=\'http://support.websoft9.com/kbtopic/usecloud/\' target=\'_blank\'>"+
    "                                <i class=\'fas fa-question\'></i>FAQ</a>"+
    "                           </li>"+
    "                        </ul>";
    document.getElementById("leftmenu").innerHTML=leftmenu;
 }

 //让菜单中当前页面为蓝色
 function menunow(nowhtml)
 {     
   var thisurl=location.pathname;
   if (thisurl.match(nowhtml)!=null)
   {
    return "active" ;
   }
 }


 //显示数据库管理工具，数据库管理工具相关定义项在此描述。
 function DisplayDatabaseTools(toolname)
 {
    var toolsdisplay;
    var toollink;
    var toollinkname;
    var defaultaccount;
    var tooltile;
    var toolcontent;


    if (toolname=="phpMyAdmin")
    {
        tooltile="MySQL数据库管理";
        toolcontent="本镜像使用数据库Web管理面板phpMyAdmin来管理Mysql数据库";
        defaultaccount="root/密码在服务器中查看";
        toollink="phpmyadmin/";
        toollinkname="登录phpMyAdmin";
        displayimage="images/phpmyadmin.png";
    }
    
    if (toolname=="jspMyAdmin")
    {
        tooltile="MySQL数据库管理";
        toolcontent="本镜像内置数据库Web管理面板jspMyAdmin来管理MySQL数据库";
        defaultaccount="root/密码在服务器中查看";
        toollink="jspmyadmin";
        toollinkname="登录jspMyAdmin";
        displayimage="images/jspmyadmin.png";
    }

    if (toolname=="pgMyAdmin")
    {
        tooltile="PostgreSQL数据库管理";
        toolcontent="本镜像内置数据库Web管理面板pgMyAdmin来管理PostgreSQL数据库";
        defaultaccount="root/密码在服务器中查看";
        toollink="pgmyadmin";
        toollinkname="登录pgMyAdmin";
        displayimage="images/pgmyadmin.png";
    }

    if (toolname=="SQL Server Managerment Studio")
    {
        tooltile="SQLServer数据库管理";
        toolcontent="本镜像内置SQL Server Managerment Studio(企业管理器)";
        defaultaccount="sa/websoft9!";
        toollink="#";
        toollinkname="远程桌面到服务器后，登录数据库管理工具";
        displayimage="images/sqlserver.png";
    }

    dbtoolsdisplay="<div class=\"col-lg-4\">"+
    "                                <div class=\"au-card recent-report\">"+
    "                                    <div class=\"au-card-inner\">"+
    "                                        <h3 class=\"title-2\"><i class=\"fas fa-database\"></i> "+tooltile+"</h3><br>"+
    "                                        <div class=\"alert alert-warning\" role=\"alert\">"+
    "                                                <p class=\"lead\"> "+toolcontent+"</p>"+
    "                                                <span class=\"badge badge-danger\">默认账号密码： "+defaultaccount+"</span>"+
    "                                              </div>"+
    "                                        <div class=\"au-task__footer\">"+
    "                                                <a class=\"btn btn-warning\" href=\"/"+toollink+"\" target=\"_blank\"  role=\"button\"> "+toollinkname+"</a>"+
    "                                            </div>"+
    "                                    </div>"+
    "                                </div>"+
    "                            </div>";

    document.getElementById("databasepanel").innerHTML=document.getElementById("databasepanel").innerHTML+dbtoolsdisplay;
 }

 //显示更多工具
 function DisplayOtherTools(toolname)
 {
    var toolsdisplay;
    var toollink;
    var toollinkname;
    var defaultaccount;
    var tooltile;
    var toolcontent;


    if (toolname=="php-fork")
    {
        tooltile="雅黑探针";
        toolcontent="雅黑PHP探针,可以实时查看服务器硬盘资源、内存占用、网卡流量、系统负载、服务器时间等信息,1秒钟刷新一次"
        toollink="tools/tz.php";
        toollinkname="进入工具";
    }
    
    if (toolname=="php-info")
    {
        tooltile="phpinfo";
        toolcontent="查看Apache,PHP完整的配置信息，输出PHP编译选项、PHP版本、扩展组件信息、HTTP 头和PHP授权信息等"
        toollink="tools/phpinfo.php";
        toollinkname="进入工具";
    }

    if (toolname=="php-opcache")
    {
        tooltile="Opcache";
        toolcontent="Opcache面板用于查看Opcache Version、内存使用情况、Cache使用统计等信息，并可以对重置和刷新缓存"
        toollink="tools/ocp.php";
        toollinkname="进入工具";
    }

    toolsdisplay="<div class=\"col-lg-4\">"+
    "                                <div class=\"au-card recent-report\">"+
    "                                    <div class=\"au-card-inner\">"+
    "                                        <h3 class=\"title-2\"><i class=\"fas fa-gavel\"></i> "+tooltile+"</h3><br>"+
    "                                        <div class=\"alert alert-success\" role=\"alert\">"+
    "                                                <p class=\"lead\"> "+toolcontent+"</p>"+
    "                                              </div>"+
    "                                        <div class=\"au-task__footer\">"+
    "                                                <a class=\"btn btn-success\" href=\"/9panel/"+toollink+"\" target=\"_blank\"  role=\"button\"> "+toollinkname+"</a>"+
    "                                            </div>"+
    "                                    </div>"+
    "                                </div>"+
    "                            </div>";

    document.getElementById("othertoolspanel").innerHTML=document.getElementById("othertoolspanel").innerHTML+toolsdisplay;
 }


 //显示首页安装说明，逻辑上比较复杂
 function DisplayInstallSteps(stacktype,installdr,stackname)
 {
     //installdr表明第三步的链接地址来源于stack.apps.installdr    
    
    var tempcount=0;
    var buttonlinkname="";
    if (stacktype=="apps")
    {
        tempcount=0;
        buttonlinkname="打开镜像安装向导";
    }
    else if(stacktype=="infrastructure")
    {
        tempcount=1;
        buttonlinkname="打开镜像安装指导文档";
    }
    else
    {
        alert("类型错误！")
    }

    //控制是否显示按钮
    step2displaynone=["display:none","display:none","display:block"];

    
    //stepsdisplay是一个全局变量
    for(j=0;j<stepsdisplay[tempcount].steps.length;j++)
    {
        //第三步按钮文字中插入镜像名称
        var steplinknamestr="";
        var buttonstr="";
       

        if(j==2)
        {
          //处理按钮文字和按钮数量（组合应用有两个按钮）
          for(k=0;k<installdr.length;k++)
          {
          buttonstr=buttonstr+"<a class=\"btn btn-warning btn-lg btn-block\" href=\""+installdr[k]+"\" target=\"_blank\"  role=\"button\"> "+buttonlinkname.replace(/镜像/,stackname[k])+"</a>";
          }
        }
       
        
        stepsdisplaystr="<div class=\"col-lg-4\">"+
        "                                <div class=\"au-card recent-report\">"+
        "                                    <div class=\"au-card-inner\">"+
        "                                        <h3 class=\"title-2\"><i class=\"fas fa-arrow-circle-right\"></i> "+stepsdisplay[tempcount].steps[j].stepname+"</h3><br>"+
        "                                        <div class=\"alert info alert\" role=\"alert\">"+
        "                                                <p class=\"lead\"> "+stepsdisplay[tempcount].steps[j].stepcontent+"</p>"+
        "                                              </div>"+
        "                                        <img src=\""+stepsdisplay[tempcount].steps[j].stepimage+"\" class=\"rounded mx-auto d-block\" >"+
        "                                        <div style=\""+step2displaynone[j]+"\" id=\"stepnamediv\" class=\"au-task__footer\">"+buttonstr+
        "                                            </div>"+
        "                                    </div>"+
        "                                </div>"+
        "                            </div>";
       

        document.getElementById("stackinstallation").innerHTML=document.getElementById("stackinstallation").innerHTML+stepsdisplaystr;
    }
 }
