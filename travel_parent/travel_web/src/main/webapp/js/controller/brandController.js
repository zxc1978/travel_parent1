app.controller('brandController',function ($scope,brandService,$controller) {
    //将baseController继承过来
    $controller("baseController",{$scope:$scope})
    //分页查询
    $scope.findPage=function (page,rows) {
        brandService.findPage(page,rows).success(
            function (response){
                $scope.list=response.rows;
                //total总页数需要给pagination。获取其值无意义。我们把total的值赋给  $scope.paginationConf
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            })
    }
    //添加商品，商品的修改和添加都依赖于同一个模态框。所以我们修改add方法为save方法。根据entity是否包含id字段
    //来决定发送add.do还是update.do
    $scope.save=function () {
        var methodObject;
        if($scope.entity.id == null){
            methodObject = brandService.add($scope.entity)
        }else{
            methodObject = brandService.update($scope.entity)
        }
        methodObject.success(
            function (response) {
                if(response.success){
                    $scope.reloadList(); //添加成功。我们要刷新页面
                }else{
                    alter(response.message)
                }
            }
        );
    };

    //回显
    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity = response;
            }
        )
    }

    //删除
    $scope.dele=function () {
        brandService.dele($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                    $scope.selectIds=[]
                }else{
                    alter(response.message)
                    $scope.selectIds=[]
                }
            }
        )
    }

    $scope.searchEntity={};//定义搜索对象
    //商品的分页回显。
    $scope.search=function (page,rows) {
        brandService.search(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.list=response.rows;
                //total总页数需要给pagination。获取其值无意义。我们把total的值赋给  $scope.paginationConf
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        )
    }
})