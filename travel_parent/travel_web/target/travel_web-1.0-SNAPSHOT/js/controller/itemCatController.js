 //控制层 
app.controller('itemCatController' ,function($scope,$controller   ,itemCatService){	
	
	$controller('baseController',{$scope:$scope});//继承



	//控制当前级别的变量
	$scope.gread=1;
	//设置gread变量的方法
	$scope.setGread=function(value){
		$scope.gread=value;
	}
	//定义两个存放数据的对象。
	// $scope.entity_1={}
	// $scope.entity_2={}
	//面包屑导航条的实现。
	$scope.selectList=function(entity){
		if($scope.gread==1){
            $scope.entity_1=null
            $scope.entity_2=null
		}
		if($scope.gread==2){
            $scope.entity_1=entity
            $scope.entity_2=null
		}
		if($scope.gread==3){
            $scope.entity_2=entity
		}
        $scope.findListByParentId(entity.id)
	}

	//设置一个变量记录上级ID。用于新增和修改。
	$scope.parentId=0;

	//根据父ID查询分类列表页
	$scope.findListByParentId=function(parentId){
		itemCatService.findListByParentId(parentId).success(
			function (response) {
                $scope.parentId=parentId;
				$scope.list=response;
            }
		);
	}
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		itemCatService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		itemCatService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		itemCatService.findOne(id).success(
			function(response){
				$scope.entity= response;					
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.id!=null){//如果有ID
			serviceObject=itemCatService.update( $scope.entity ); //修改
			//修改的话。需要回显。此时的entity是有parentId的。所以不需要赋值。
		}else{
			$scope.entity.parentId=$scope.parentId;//将当前页面的parentId赋给新增的对象。
			serviceObject=itemCatService.add( $scope.entity  );//增加 
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询 
		        	$scope.findListByParentId($scope.parentId);//重新加载
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	 
	//批量删除 
	$scope.dele=function(){			
		//获取选中的复选框			
		itemCatService.dele( $scope.selectIds ).success(
			function(response){
				if(response.success){
					//$scope.reloadList();//刷新列表
					$scope.findListByParentId($scope.parentId)
				}						
			}		
		);				
	}
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		itemCatService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
    
});	
