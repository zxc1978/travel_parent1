app.controller('indexController',function ($scope,loginService) {
    $scope.loginName=function () {
        loginService.loginName().success(
            function (response) {
                $scope.entity=response;
        })
    }
})