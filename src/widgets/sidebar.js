import {inject} from 'aurelia-framework';
import $ from 'jquery';

@inject (Element)
export class Sidebar {
    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element).find(".cl-vnavigation li ul").each(function() {
            $(this).parent().addClass("parent");
        });

        $(this.element).find(".cl-vnavigation li ul li.active").each(function() {
            $(this).parent().css({
                'display': 'block'
            });
            $(this).parent().parent().addClass("open");
        });

        $(this.element).find(".cl-vnavigation").delegate(".parent > a", "click", function(e) {
            $(".cl-vnavigation .parent.open > ul").not($(this).parent().find("ul")).slideUp(300, 'swing', function() {
                $(this).parent().removeClass("open");
            });

            var ul = $(this).parent().find("ul");
            ul.slideToggle(300, 'swing', function() {
                var p = $(this).parent();
                if (p.hasClass("open")) {
                    p.removeClass("open");
                } else {
                    p.addClass("open");
                }
            });
            e.preventDefault();
        });
    }
}