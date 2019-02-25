package com.itheima.mapper;


import com.itheima.pojo.TabRoute;
import com.itheima.pojo.TabRouteExample;
import org.apache.ibatis.annotations.Param;
import java.util.List;

public interface TabRouteMapper {
    int countByExample(TabRouteExample example);

    int deleteByExample(TabRouteExample example);

    int deleteByPrimaryKey(Integer rid);

    int insert(TabRoute record);

    int insertSelective(TabRoute record);

    List<TabRoute> selectByExample(TabRouteExample example);

    TabRoute selectByPrimaryKey(Integer rid);

    int updateByExampleSelective(@Param("record") TabRoute record, @Param("example") TabRouteExample example);

    int updateByExample(@Param("record") TabRoute record, @Param("example") TabRouteExample example);

    int updateByPrimaryKeySelective(TabRoute record);

    int updateByPrimaryKey(TabRoute record);
}