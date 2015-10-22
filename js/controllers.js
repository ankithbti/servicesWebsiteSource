/**
 * Created by ankithbti on 18/10/15.
 */


//var jsonDataFile = '../data/companyData.json';
//var jsonDataFile = 'http://localhost:63342/didiWebsite/data/companyData.json';
var jsonDataFile = 'http://www.fidatoint.com/readJSON.php';

/////////////////////////////
// Home Page Controller
/////////////////////////////
angular.module('mainPageController', [])
    .controller('pageController', function($scope, $http){

        var companyData = null;
        $http.get(jsonDataFile).
            success(function(data, status, headers, config){
                companyData = data;
                //alert(companyData.services[0].serviceName);
                console.log("Data Loaded....");
                setCompanyData(companyData);
            }).
            error(function(){
                alert("Error while loading");
                console.log("Error while loading companyData file. Please contact admin.");
            });

        var setCompanyData = function(data){
            $scope.title = "Home - Fidato"
            $scope.companyName = data.companyName;
            $scope.companyMainPageLink = data.companyMainPageLink;
            $scope.isCompanyNameHighlight = true;

            $scope.services = data.services;

            $scope.carousalItems = data.carousalItems;

            $scope.menuItems = data.menuItems;
        };

    })
    .directive('pageFooter', function(){
        return {
            restrict: 'E',
            templateUrl: 'pageFooter.html'
        };
    })
    .directive('carousal', function(){
        return {
            restrict: 'E',
            templateUrl: 'carousal.html'
        };
    })
    .directive('topNavigation', function(){
        return {
            restrict: 'E',
            //template: 'TESTING......'
            templateUrl: 'topNavigation.html'
        };
    });

/////////////////////////////
// Consulting Page Controller
/////////////////////////////
angular.module('conPageController', [])
    .controller('conController', function($scope, $http){
        var companyData = null;
        $http.get(jsonDataFile).
            success(function(data, status, headers, config){
                companyData = data;
                //alert(companyData.services[0].serviceName);
                console.log("Data Loaded....");
                setCompanyData(companyData);
            }).
            error(function(){
                alert("Error while loading");
                console.log("Error while loading companyData file. Please contact admin.");
            });

        var setCompanyData = function(data){
            $scope.title = "Consulting - Fidato"
            $scope.companyName = data.companyName;
            $scope.companyMainPageLink = data.companyMainPageLink;
            $scope.isCompanyNameHighlight = false;

            $scope.menuItems = data.menuItems;

            var menuItemIndex = 0;
            $scope.menuItems[menuItemIndex].isActive = true;
            $scope.bannerImage = $scope.menuItems[menuItemIndex].bannerImage;
            $scope.headingText = $scope.menuItems[menuItemIndex].headingText;
            $scope.headingIcon = $scope.menuItems[menuItemIndex].headingIcon;

        };

    });

/////////////////////////////
// Technology Page Controller
/////////////////////////////
angular.module('techPageController', [])
    .controller('techController', function($scope, $http){
        var companyData = null;
        $http.get(jsonDataFile).
            success(function(data, status, headers, config){
                companyData = data;
                //alert(companyData.services[0].serviceName);
                console.log("Data Loaded....");
                setCompanyData(companyData);
            }).
            error(function(){
                alert("Error while loading");
                console.log("Error while loading companyData file. Please contact admin.");
            });

        var setCompanyData = function(data){
            $scope.title = "Technology - Fidato"
            $scope.companyName = data.companyName;
            $scope.companyMainPageLink = data.companyMainPageLink;
            $scope.isCompanyNameHighlight = false;

            $scope.menuItems = data.menuItems;

            var menuItemIndex = 1;
            $scope.menuItems[menuItemIndex].isActive = true;
            $scope.bannerImage = $scope.menuItems[menuItemIndex].bannerImage;
            $scope.headingText = $scope.menuItems[menuItemIndex].headingText;
            $scope.headingIcon = $scope.menuItems[menuItemIndex].headingIcon;

        };
    });

/////////////////////////////
// Recruitment Page Controller
/////////////////////////////
angular.module('recPageController', [])
    .controller('recController', function($scope, $http){
        var companyData = null;
        $http.get(jsonDataFile).
            success(function(data, status, headers, config){
                companyData = data;
                //alert(companyData.services[0].serviceName);
                console.log("Data Loaded....");
                setCompanyData(companyData);
            }).
            error(function(){
                alert("Error while loading");
                console.log("Error while loading companyData file. Please contact admin.");
            });

        var setCompanyData = function(data){
            $scope.title = "Recruitment - Fidato"
            $scope.companyName = data.companyName;
            $scope.companyMainPageLink = data.companyMainPageLink;
            $scope.isCompanyNameHighlight = false;

            $scope.menuItems = data.menuItems;

            var menuItemIndex = 2;
            $scope.menuItems[menuItemIndex].isActive = true;
            $scope.bannerImage = $scope.menuItems[menuItemIndex].bannerImage;
            $scope.headingText = $scope.menuItems[menuItemIndex].headingText;
            $scope.headingIcon = $scope.menuItems[menuItemIndex].headingIcon;

        };
    });


/////////////////////////////
// Finance Page Controller
/////////////////////////////
angular.module('financePageController', [])
    .controller('fpController', function($scope, $http){
        var companyData = null;
        $http.get(jsonDataFile).
            success(function(data, status, headers, config){
                companyData = data;
                //alert(companyData.services[0].serviceName);
                console.log("Data Loaded....");
                setCompanyData(companyData);
            }).
            error(function(){
                alert("Error while loading");
                console.log("Error while loading companyData file. Please contact admin.");
            });

        var setCompanyData = function(data){
            $scope.title = "Finance - Fidato"
            $scope.companyName = data.companyName;
            $scope.companyMainPageLink = data.companyMainPageLink;
            $scope.isCompanyNameHighlight = false;

            $scope.menuItems = data.menuItems;

            var menuItemIndex = 3;
            $scope.menuItems[menuItemIndex].isActive = true;
            $scope.bannerImage = $scope.menuItems[menuItemIndex].bannerImage;
            $scope.headingText = $scope.menuItems[menuItemIndex].headingText;
            $scope.headingIcon = $scope.menuItems[menuItemIndex].headingIcon;

        };
    });


/////////////////////////////
// Contact Page Controller
/////////////////////////////
angular.module('contactPageController', [])
    .controller('contactController', function($scope, $http){
        var companyData = null;
        $http.get(jsonDataFile).
            success(function(data, status, headers, config){
                companyData = data;
                //alert(companyData.services[0].serviceName);
                console.log("Data Loaded....");
                setCompanyData(companyData);
            }).
            error(function(){
                alert("Error while loading");
                console.log("Error while loading companyData file. Please contact admin.");
            });

        var setCompanyData = function(data){
            $scope.title = "Contact Us - Fidato"
            $scope.companyName = data.companyName;
            $scope.companyMainPageLink = data.companyMainPageLink;
            $scope.isCompanyNameHighlight = false;

            $scope.menuItems = data.menuItems;

            var menuItemIndex = 4;
            $scope.menuItems[menuItemIndex].isActive = true;
            $scope.bannerImage = $scope.menuItems[menuItemIndex].bannerImage;
            $scope.headingText = $scope.menuItems[menuItemIndex].headingText;
            $scope.headingIcon = $scope.menuItems[menuItemIndex].headingIcon;

        };
    });




//$scope.menuItems = [
//    {
//        name: 'Consulting',
//        link: 'sampleConsultingPage.html',
//        icon: 'user',
//        isActive: false
//    },
//    {
//        name: 'Technology',
//        link: 'sampleTechnologyPage.html',
//        icon: 'phone',
//        isActive: false
//    },
//    {
//        name: 'Recruitment',
//        link: 'sampleRecruitmentPage.html',
//        icon: 'globe',
//        isActive: false
//    },
//    {
//        name: 'Finance',
//        link: 'sampleFinancePage.html',
//        icon: 'piggy-bank',
//        isActive: false
//    },
//    {
//        name: 'Contact Us',
//        link: 'sampleContactUsPage.html',
//        icon: 'envelope',
//        isActive: false
//    }
//];

//$scope.servicesDescription = [
//    {
//        serviceName: 'Consulting',
//        serviceSmallDescription: 'Small Description about Service',
//        serviceSmallImage: '../images/consulting_small_5.ico',
//        serviceQuotationBold: 'Consulting Services!',
//        serviceQuotationMuted: 'Advices are valuable & that\'s why we are here.',
//        serviceQuotationImage: '../images/consulting_500_1.png',
//        serviceLink: 'sampleConsultingPage.html'
//    },
//    {
//        serviceName: 'Technology',
//        serviceSmallDescription: 'Small Description about Service',
//        serviceSmallImage: '../images/technology_small_6.png',
//        serviceQuotationBold: 'Technology Services!',
//        serviceQuotationMuted: 'We beleive in Technology so, let\'s change the world together.',
//        serviceQuotationImage: '../images/technology_500.png',
//        serviceLink: 'sampleTechnologyPage.html'
//    },
//    {
//        serviceName: 'Recruitment',
//        serviceSmallDescription: 'Small Description about Service',
//        serviceSmallImage: '../images/recruitment_small_3.png',
//        serviceQuotationBold: 'Recruitment Services!',
//        serviceQuotationMuted: 'Human is the best asset for a company & we help you to hire best for you.',
//        serviceQuotationImage: '../images/recruitment_500_1.png',
//        serviceLink: 'sampleRecruitmentPage.html'
//    },
//    {
//        serviceName: 'Technology',
//        serviceSmallDescription: 'Small Description about Service',
//        serviceSmallImage: '../images/finance_small1.png',
//        serviceQuotationBold: 'Financial Services!',
//        serviceQuotationMuted: 'It is must for every business & we are best at this.',
//        serviceQuotationImage: '../images/finance_500_1.png',
//        serviceLink: 'sampleFinancePage.html'
//    }
//];

//$scope.carousalItems = [
//    {
//        slideImageSrc: '../images/consulting4.jpg',
//        slideClass: 'first-slide',
//        slideImageAltText: 'Consulting Service Image',
//        isActive: true
//    },
//    {
//        slideImageSrc: '../images/training.jpeg',
//        slideClass: 'second-slide',
//        slideImageAltText: 'Technology Service Image',
//        isActive: false
//    },
//    {
//        slideImageSrc: '../images/recruitment1.jpg',
//        slideClass: 'third-slide',
//        slideImageAltText: 'Recruiment Service Image',
//        isActive: false
//    },
//    {
//        slideImageSrc: '../images/finance2.jpg',
//        slideClass: 'fourth-slide',
//        slideImageAltText: 'Finance Service Image',
//        isActive: false
//    }
//
//
//];