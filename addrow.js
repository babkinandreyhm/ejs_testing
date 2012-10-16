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
            ds._new[ds._new.length]=jQuery.extend(true, {},ds._newTemplate);
        };
        $("input.add_row").each(add_row_function);
        $("input.add_row").live("click",add_row_function);
        $('input').live("change",function() {
            var data=EJSdata.rows._old;
            if($(this).attr("variable")=="new"){
                data=EJSdata.rows._new;
            }
            data[$(this).attr("key")][$(this).attr("property")]=$(this).val();
            var a=2+2;
        });
    }
)