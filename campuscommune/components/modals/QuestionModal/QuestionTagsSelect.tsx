


// this is fake tag items to display  the tags related to the question
const tags = [
    "Coding",
    "Programming",
    "Web Development",
    "React",
]


const QuestionTagsSelect = () => {
    return (
      <div className="w-full flex flex-row gap-3 md:text-sm text-xs px-3 bg-neutral-100">
        <div className="flex items-center justify-center px-3 py-1 rounded-2xl bg-blue-700 text-neutral-100 cursor-pointer">
          All
        </div>
        {tags.map((tag) => (
          <div
            key={tag}
            style={{ borderWidth: "1px" }}
            className="flex items-center justify-center px-3 py-1 rounded-2xl text-blue-700 cursor-pointer border-blue-700"
          >
            {tag}
          </div>
        ))}
      </div>
    );
}

export default QuestionTagsSelect;