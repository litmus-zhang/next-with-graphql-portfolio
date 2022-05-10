const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        stack: ['Soldidity', 'Javascript'],
    }, {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        stack: ['Soldidity', 'Javascript'],
    }, {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        stack: ['Soldidity', 'Javascript'],
    }, {
        id: 4,
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        stack: ['Soldidity', 'Javascript'],
}

];

export default function ProjectCard() {
  return (
      <div className="flex flex-wrap gap-4">
          {projects.map(project => (
              <div className=" border-2 border-gray-2 flex flex-col w-2/5 h-3/4 content-center items-center  text-white cursor-pointer hover:border-gray-4" key={project.id}>
                  <div className="w-auto h-1/4 object-contain">
                      <img src={project.image} alt={project.title} />
                  </div>
                  
                  <div className="p-4">
                      <h3 className="font-bold  text-xl">{project.title}</h3>
                      <p className="font-light text-gray-4 pb-8">{project.description.substring(0, 250)}</p>
                      
                      <div className="w-full h-1 mt-3 mb-3 bg-gray-2"></div>
                      <div className="mt-4 mb-6">
                          <h1 className="font-xl font-bold uppercase text-gray-4"> Technologies Used</h1>
                          {project.stack.map(stack => (
                              <span className="mr-4 text-gray-3 font-medium" key={stack}>{stack}</span>
                          ))}
                      </div>
                  </div>
        
              </div>))}
         </div> 
  )
}
