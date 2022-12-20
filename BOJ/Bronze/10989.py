# [BOJ] 10989. 수 정렬하기 3

## 메모리 초과 -> sort() 사용으로 인해 발생
# N = int(input())  # 수의 개수
# numbers = list(int(input()) for _ in range(N))
# numbers.sort()
# for i in range(numbers):
#     print(i)
#-------------------------------------
# 계수정렬(Counting Sort) 이용 #
# - 배열의 인덱스를 특정한 데이터의 값으로 여기는 정렬 방법
# - 배열의 크기는 데이터의 범위를 포함할 수 있도록 설정
# - 데이터가 등장한 횟수를 센다
# - 유의사항 : 데이터의 개수가 많을 때 파이썬에서는 sys.stdin.readline()을 사용해야 함

import sys
N = int(sys.stdin.readline())
num_list = [0] * 10001  # 입력으로 받을 수 있는 10,000개의 수 담는 list
# num_list = [0, 0, 0, 0, 0, 0, ...]

# 입력을 받을 때마다 그 수에 해당하는 인덱스에 +1 해줘서 그 수의 개수 담기
for i in range(N):
    number = int(sys.stdin.readline())
    num_list[number] += 1
# num_list = [0, 2, 2, 2, 1, 2, 0, 1, 0, 0, ...]

for i in range(10001):    # list 돌면서
    if num_list[i] != 0:  # 0이 아니라면
        for j in range(num_list[i]):  # 값만큼 인덱스에 해당하는 숫자를 출력!
            print(i)
