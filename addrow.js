/**
 * Created with JetBrains PhpStorm.
 * User: andrey.babkin
 * Date: 15.10.12
 * Time: 18:43
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(
    function(){
        var add_row_function=function(){
            var ds=EJSdata[$(this).attr('dataSource')];
            new EJS({url:$(this).attr('templateFile')}).update($(this).attr('targetElement'),ds);
            ds._new[ds._new.length]=ds._newTemplate;
        };
        $("input.add_row").each(add_row_function);


        $("input.add_row").live("click",add_row_function);
    }



)