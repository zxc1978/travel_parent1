package com.itheima.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.itheima.mapper.TabCategoryMapper;
import com.itheima.pojo.TabCategory;
import com.itheima.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private TabCategoryMapper categoryMapper;
    @Override
    public List<TabCategory> findAll() {

        return categoryMapper.selectByExample(null);
    }
}
