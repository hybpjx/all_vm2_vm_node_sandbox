import subprocess

def run_node_script(url_to_pass, jsp_path_to_pass):
    # 定义要执行的Node.js脚本的路径
    node_script_path = "example/use-remote-zgyd/index.js"

    # 使用subprocess.run执行Node.js脚本，并传递网址和jspPath作为命令行参数
    result = subprocess.run(["node", node_script_path, url_to_pass, jsp_path_to_pass], capture_output=True, text=True)

    # 打印Node.js脚本的输出
    print("Node.js script output:")
    print(result.stdout)

    # 如果有错误，也打印错误信息
    if result.stderr:
        print("Error output:")
        print(result.stderr)

run_node_script("https://cq.cbss.10010.com", "/amchargepls")
