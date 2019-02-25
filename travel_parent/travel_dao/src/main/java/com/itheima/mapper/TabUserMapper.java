package com.itheima.mapper;


import com.itheima.pojo.TabUser;
import com.itheima.pojo.TabUserExample;
import org.apache.ibatis.annotations.Param;
import java.util.List;

public interface TabUserMapper {
    int countByExample(TabUserExample example);

    int deleteByExample(TabUserExample example);

    int deleteByPrimaryKey(Integer uid);

    int insert(TabUser record);

    int insertSelective(TabUser record);

    List<TabUser> selectByExample(TabUserExample example);

    TabUser selectByPrimaryKey(Integer uid);

    int updateByExampleSelective(@Param("record") TabUser record, @Param("example") TabUserExample example);

    int updateByExample(@Param("record") TabUser record, @Param("example") TabUserExample example);

    int updateByPrimaryKeySelective(TabUser record);

    int updateByPrimaryKey(TabUser record);
}