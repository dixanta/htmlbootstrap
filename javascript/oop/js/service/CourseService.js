function CourseService(){
	this.courseList=[];

	this.getAll=function(){
		return this.courseList;
	};

	this.insert=function(course){
		this.courseList.push(course);
	};

}