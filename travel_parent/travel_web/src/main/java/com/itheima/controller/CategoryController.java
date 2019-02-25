package com.itheima.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.itheima.pojo.TabCategory;
import com.itheima.service.CategoryService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Reference
    private CategoryService categoryService;

    @RequestMapping("/findAll")
    public List<TabCategory> findAll(){
        return categoryService.findAll();
    }
}
