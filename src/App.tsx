import './App.css'

function App() {

  const tags = [
    'All', 'Active', 'Completed'
  ];

  const tarefas = [
    'Create theme', 'Work on wordpress', 'Organize office main department', 'Error solve in HTML template'
  ];

  const MinhasTarefas = (props: any) => {
    return (
    <div className="todo-item">
      <div className="checker">
        <span><input type="checkbox" /></span>
      </div>
      <span>{props.titulo}</span>
      <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close" /></a>
    </div>
    )
  }

  const  MinhasTags = (props: any) => {
    return (
      <li
        role="presentation"
        className="nav-item all-task active">
        <a href="#" className="nav-link">{props.titulo}</a>
      </li>
    )
  }

  return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card card-white">
						<div className="card-body">
							<form action="javascript:void(0);">
								<input
									type="text"
									className="form-control add-task"
									placeholder="New Task..."
								/>
							</form>
              <ul className="nav nav-pills todo-nav">
                {tags.map(
                  tags => <MinhasTags titulo={tags}/>
                )}
							</ul>

              <div className="todo-list">
                {tarefas.map(
                  tarefas => <MinhasTarefas titulo={tarefas}/>
                )}
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default App
