
class Course {
    constructor(
        id,
        title,
        description,
        duration = "",
        enrolledStudents = 0,
        imageUrl = "",
        whatWillLearn = [],
        instructor = null,
        contents = [],
        enrollments = [],
        reviews = []
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.enrolledStudents = enrolledStudents;
        this.imageUrl = imageUrl;
        this.whatWillLearn = whatWillLearn;
        this.instructor = instructor;
        this.contents = contents;
        this.enrollments = enrollments;
        this.reviews = reviews;
    }
}

export default Course;
